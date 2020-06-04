import React from "react";
import { Formik, Form } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Blank, Wrapper, Break, Title, Header } from "./styles";
import { Link } from "../../components/Link";
import { H5 } from "../../components/H5";
import { Button, InvertedButton } from "../../components/Button";
import FormikControl from "../Formik/FormikControl";
import {
  normalizeErrors,
  addToLocalStorageObject,
  hashPassword
} from "../../utils";
import { useMutation } from "@apollo/react-hooks";
import "./styles.css";
import { SIGNUP_MUTATION } from "./mutations";
import Loader from "../../components/Loader";

function SignupForm(props) {
  let history = useHistory();

  const [registerUser] = useMutation(SIGNUP_MUTATION);

  const emailNotLongEnough = "email must be at least 3 characters";
  const emailRequired = "Please enter an email address";
  const invalidEmail = "email must be a valid email";
  const nameNotLongEnough = "user name must be at least 4 characters";
  const passwordNotLongEnough = "password must be at least 8 characters";
  const passwordDoNotMatch = "passwords must match";
  const fieldRequired = "This field is required";

  const initialValues = {
    username: "",
    email: "",
    password1: "",
    password2: ""
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .min(3, emailNotLongEnough)
      .max(100)
      .email(invalidEmail)
      .required(emailRequired),
    username: Yup.string()
      .min(4, nameNotLongEnough)
      .max(100)
      .required(fieldRequired),
    password1: Yup.string()
      .min(8, passwordNotLongEnough)
      .max(100)
      .required(fieldRequired),
    password2: Yup.string()
      .oneOf([Yup.ref("password1"), null], passwordDoNotMatch)
      .required(fieldRequired)
  });

  const onSubmit = async (values, { props, setErrors, setSubmitting }) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    // /activate/eyJ1c2VybmFtZSI6ImloaWhpaCIsImFjdGlvbiI6ImFjdGl2YXRpb24ifQ:1jcuC4:rCUdGNtqNMaDwxItHCz912bA-qM

    const { data, loading, errors } = await registerUser({
      variables: values
    });
    console.log("the props hapa : ");
    console.log("data: ", data, "loading : ", loading, "errors : ", errors);
    if (loading) return <p>Loading ...</p>;
    if (errors) {
      // const errors = error.graphQLErrors.map(error => error.message);
      console.log(errors);
      console.log("errors from function:", errors.message);
      return errors;
    }
    if (data) {
      if (data.register.success) {
        console.log("data received", data);
        setSubmitting(false);
        addToLocalStorageObject(
          "kiu_auth_profile",
          "email",
          values.email.toLowerCase()
        );
        hashPassword(values.password2);
        // let profile = {};
        // let email = { email: values.email, secret: values.password };
        // profile = { ...profile, ...email };

        history.push("/activate");
      } else {
        console.log("the props", props);
        setErrors(normalizeErrors(data.register.errors));
        setSubmitting(false);
      }
    }
    return null;
  };

  return (
    <>
      <Title>
        <H5>
          <Link to="/">{"<"} Home</Link>
        </H5>
      </Title>
      <Wrapper>
        <Header>
          <h1>Create Account</h1>
        </Header>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {formik => {
            // console.log("formik props", formik.errors);
            return (
              <Form>
                <FormikControl
                  control="input"
                  type="text"
                  label="User Name"
                  name="username"
                />
                <FormikControl
                  control="input"
                  type="email"
                  label="Email"
                  name="email"
                />
                <FormikControl
                  control="input"
                  type="password"
                  label="Password"
                  name="password1"
                />
                <FormikControl
                  control="input"
                  type="password"
                  label="Confirm Password"
                  name="password2"
                />

                <Blank />
                <Blank />

                <Button type="submit" disabled={!formik.isValid}>
                  {formik.isSubmitting ? <Loader /> : "Sign Up"}
                </Button>

                <Break>
                  <hr />
                  -------------------- Already have an account?
                  --------------------
                  <hr />
                </Break>
                <Link to="/login">
                  <InvertedButton>Login</InvertedButton>
                </Link>
              </Form>
            );
          }}
        </Formik>
      </Wrapper>
    </>
  );
}

function Signup() {
  return <SignupForm />;
}
export default Signup;
