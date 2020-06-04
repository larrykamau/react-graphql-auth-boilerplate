import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Blank, Wrapper, Break, NewP, Title, Header } from "./styles";
import { Link } from "../../components/Link";
import { H5 } from "../../components/H5";
import { Button, InvertedButton } from "../../components/Button";
import FormikControl from "../Formik/FormikControl";
import { useMutation } from "@apollo/react-hooks";
import { RESEND_ACTIVATION_EMAIL_MUTATION } from "./mutations";
import { normalizeErrors } from "utils";
import Loader from "components/Loader";

const EmailVerification = () => <EmailForm />;

function EmailForm() {
  let location = useLocation();
  let history = useHistory();
  console.log("the locatrion props: ", location);
  console.log("the history props: ", history);

  const [resendVerification] = useMutation(RESEND_ACTIVATION_EMAIL_MUTATION);

  const emailNotLongEnough = "email must be at least 3 characters";
  const emailRequired = "Please enter an email address";
  const invalidEmail = "email must be a valid email";
  const getEmail = () => {
    const pureJSON = localStorage.getItem("kiu_auth_profile");
    const accessToken = JSON.parse(pureJSON);
    if (accessToken === null || undefined) {
      return false;
    } else {
      return accessToken.email;
    }
  };
  const initialValues = {
    email: !getEmail() ? "" : getEmail()
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .min(3, emailNotLongEnough)
      .max(100)
      .email(invalidEmail)
      .required(emailRequired)
  });

  const onSubmit = async (values, { props, setErrors, setSubmitting }) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("the values hapa : ", values);
    try {
      const { data, loading, errors } = await resendVerification({
        variables: values
      });

      console.log("data: ", data, "loading : ", loading, "errors : ", errors);
      if (loading) return <p>Loading ...</p>;
      if (errors) {
        console.log(errors);
        console.log("errors from function:", errors.message);
        return errors;
      }
      if (data) {
        if (data.resendActivationEmail.success) {
          console.log("data received", data);
          window.alert("semail link sent"); //do something other than alert
          setSubmitting(false);
        } else {
          console.log("the props", props);
          setErrors(normalizeErrors(data.resendActivationEmail.errors));
          setSubmitting(false);
        }
      }
      return null;
    } catch (error) {
      console.log("catch errors: ", JSON.stringify(error));
    }
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
          <h1>Verify Account</h1>
          <h5>A confirmation Email has been sent to the following Address</h5>
          <h5>If not the right address, change and click resend</h5>
        </Header>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {formik => {
            return (
              <Form>
                <FormikControl
                  control="input"
                  type="email"
                  label="Email"
                  name="email"
                />

                <Link to="/password-reset">
                  <NewP>Forgot Password</NewP>
                </Link>
                <Blank />
                <Button type="submit" disabled={!formik.isValid}>
                  {formik.isSubmitting ? <Loader /> : "Resend Email"}
                </Button>

                <Break>
                  <hr />
                  ----------- or if account is verified -----------
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

export default EmailVerification;
