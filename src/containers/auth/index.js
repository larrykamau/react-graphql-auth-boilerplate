import React from "react";
import { withRouter } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Blank, Wrapper, Break, Title, Header } from "./styles";
import { Link } from "../../components/Link";
import { H5 } from "../../components/H5";
import { Button, InvertedButton } from "../../components/Button";
import FormikControl from "../Formik/FormikControl";
import { normalizeErrors } from "../../utils";
import SigningUp from "../Services/SignupService";
import { useMutation } from "@apollo/react-hooks";
import "./styles.css";
import { SIGNUP_MUTATION } from "./mutations";

function SignupForm(props) {
  const [registerUser, { loading, error, data }] = useMutation(SIGNUP_MUTATION);
  console.log("dooooo props :", props);
  // registerUser({ variables: values });

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
  // const onFinish = props => {
  //   props.data.refetch();
  //   props.history.push("/profile");
  // };
  // const handleSubmit = (payload, { props, setSubmitting, setErrors }) => {
  //   const { email, password } = payload;
  //   props
  //     .signinUser({ variables: { email, password } })
  //     .then(response => {
  //       window.localStorage.setItem(
  //         "graphcoolToken",
  //         response.data.signinUser.token
  //       );
  //       props.data.refetch();
  //       props.history.push("/");
  //     })
  //     .catch(e => {
  //       const errors = e.graphQLErrors.map(error => error.message);
  //       console.log(errors);
  //       setSubmitting(false);
  //       setErrors({ email: " ", password: " ", form: errors });
  //     });
  // };
  const onSubmit = async (values, { setErrors, setSubmitting, props }) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    // const data = await props.submit(values);
    console.log("the props :", this.props);
    console.log("fsdfsdfsdf :", props);
    const errors = await props.submit(values);
    console.log("errors on form", errors);
    if (errors) {
      setErrors(normalizeErrors(errors));
    } else {
      props.onFinish();
    }
    setSubmitting(false);
  };
  // const onSubmit = async (values, { setErrors, setSubmitting }) => {
  //   await new Promise(resolve => setTimeout(resolve, 1000));
  //   console.log("this.props", this.props);
  //   console.log("props", props);
  //   try {
  //     await registerUser(values)
  //       .then(response => {
  //         if (response.data.success) {
  //           console.log(
  //             "handle the caching the data, redirecting and email confirmation"
  //           );
  //           console.log("response successful data", response.data);
  //           // call the auth function or ...
  //           localStorage.setItem("kiu_auth_access_token", response.data.token);
  //           props.data.refetch();
  //           props.history.push("/");
  //         } else {
  //           console.log("do the error handling for response form errors");
  //           console.log("error", response.data.register.errors);
  //         }
  //       })
  //       .catch(e => {
  //         const gErrors = e.graphQLErrors.map(error => error.message);
  //         // const nErrors = e.networkError.map(error => error.message);
  //         console.log("graphql errors :", e);
  //         // console.log("network errors :", nErrors);
  //         setSubmitting(false);
  //         // setErrors({ email: " ", password: " ", form: errors });
  //         // setErrors(normalizeErrors(e));
  //       });
  //   } catch (e) {
  //     console.log("this errors : ", e);
  //   }
  //   //   console.log("Logging in", values);
  //   //   console.log("signin up...");
  //   //   console.log("the data :", data);

  //   //   if (loading) return <p>Loading ...</p>;
  //   //   if (error) console.log("error za graphql ...", error);
  //   //   if (data) {
  //   //     console.log("..and the errors", data.errors);
  //   //     console.log("here is the data", data.success);
  //   //     onFinish();
  //   //     return data;
  //   //   }

  //   // setErrors(normalizeErrors(props.error));
  //   // setSubmitting(false);
  // };
  // if (loading) return <p>Loading ...</p>;
  // if (error) console.log("error za graphql ...", error);
  // if (data) {
  //   console.log("..and the errors", data.errors);
  //   console.log("here is the data", data.success);
  //   // onFinish();
  //   return data;
  // }

  return (
    <SigningUp>
      {({ submit, onFinish }) => (
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
              SignupForm
              submit={submit}
              onFinish={onFinish}
            >
              {formik => {
                // console.log("formik props", formik);
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

                    {/* <Button type="submit" disabled={!formik.isValid}>
                  {formik.isSubmitting ? "ngojaaaaa" : "Sign up"}
                </Button> */}
                    <Button type="submit" disabled={!formik.isValid}>
                      {formik.isSubmitting || loading ? (
                        <div className="loader">Loading...</div>
                      ) : (
                        "Sign Up"
                      )}
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
      )}
    </SigningUp>
  );
}

function Signup() {
  return <SignupForm />;
}
export default Signup; //withRouter(Signup);
