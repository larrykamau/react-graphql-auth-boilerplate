// import React from "react";
// import { withRouter } from "react-router-dom";
// import { graphql, compose } from "react-apollo";
// import { Formik, Form } from "formik";
// import * as Yup from "yup";

// import { Blank, Wrapper, Break, Title, Header } from "../auth/styles";
// import { Link } from "../../components/Link";
// import { H5 } from "../../components/H5";
// import { Button, InvertedButton } from "../../components/Button";
// import FormikControl from "../Formik/FormikControl";
// import { normalizeErrors } from "../../utils";
// import SigningUp from "../Services/SignupService";
// import { useMutation } from "@apollo/react-hooks";
// import "../auth/styles.css";
// import { SIGNUP_MUTATION } from "./mutations";

// // import CurrentUser from "../queries/CurrentUser";
// // import signinUser from "../mutations/signinUser";

// const emailNotLongEnough = "email must be at least 3 characters";
// const emailRequired = "Please enter an email address";
// const invalidEmail = "email must be a valid email";
// const nameNotLongEnough = "user name must be at least 4 characters";
// const passwordNotLongEnough = "password must be at least 8 characters";
// const passwordDoNotMatch = "passwords must match";
// const fieldRequired = "This field is required";

// const initialValues = {
//   username: "",
//   email: "",
//   password1: "",
//   password2: ""
// };

// const validationSchema = Yup.object().shape({
//   email: Yup.string()
//     .min(3, emailNotLongEnough)
//     .max(100)
//     .email(invalidEmail)
//     .required(emailRequired),
//   username: Yup.string()
//     .min(4, nameNotLongEnough)
//     .max(100)
//     .required(fieldRequired),
//   password1: Yup.string()
//     .min(8, passwordNotLongEnough)
//     .max(100)
//     .required(fieldRequired),
//   password2: Yup.string()
//     .oneOf([Yup.ref("password1"), null], passwordDoNotMatch)
//     .required(fieldRequired)
// });
// const handleSubmit = (payload, { props, setSubmitting, setErrors }) => {
//   // const { email, password } = payload;
//   props
//     .signinUser({ variables: payload })
//     .then(response => {
//       localStorage.setItem("graphcoolToken", response.data.register.token);
//       props.data.refetch();
//       props.history.push("/");
//     })
//     .catch(e => {
//       const errors = e.graphQLErrors.map(error => error.message);
//       console.log(errors);
//       setSubmitting(false);
//       // setErrors({ email: " ", password: " ", form: errors });
//       setErrors(normalizeErrors(errors));
//     });
// };

// const RegisterForm = ({ formik }) => (
//   <Form>
//     <FormikControl
//       control="input"
//       type="text"
//       label="User Name"
//       name="username"
//     />
//     <FormikControl control="input" type="email" label="Email" name="email" />
//     <FormikControl
//       control="input"
//       type="password"
//       label="Password"
//       name="password1"
//     />
//     <FormikControl
//       control="input"
//       type="password"
//       label="Confirm Password"
//       name="password2"
//     />

//     <Blank />
//     <Blank />

//     {/* <Button type="submit" disabled={!formik.isValid}>
//         {formik.isSubmitting ? "ngojaaaaa" : "Sign up"}
//       </Button> */}
//     <Button type="submit" disabled={!formik.isValid}>
//       {formik.isSubmitting ? (
//         <div className="loader">Loading...</div>
//       ) : (
//         "Sign Up"
//       )}
//     </Button>

//     <Break>
//       <hr />
//       -------------------- Already have an account? --------------------
//       <hr />
//     </Break>
//     <Link to="/login">
//       <InvertedButton>Register</InvertedButton>
//     </Link>
//   </Form>
// );

// const RegisterFormWithGraphQL = compose(
//   graphql(SIGNUP_MUTATION, { name: "signupUser" }),
//   // graphql(CurrentUser, { options: { fetchPolicy: "network-only" } }),
//   Formik({
//     mapPropsToValues: ({ variables }) => ({
//       ...variables
//     }),
//     // initialValues={initialValues}
//     validationSchema: validationSchema,
//     // onSubmit: onSubmit
//     onSubmit: handleSubmit,
//     displayName: "Signup"
//   })
// )(RegisterForm);

// const RegisterFormWithRouter = withRouter(RegisterFormWithGraphQL);

// class Register extends React.Component {
//   componentDidUpdate(nextProps) {
//     if (!this.props.data.user && nextProps.data.user) {
//       this.props.history.push("/dashboard");
//     }
//   }

//   render() {
//     if (this.props.data.loading) {
//       return <div />;
//     }

//     return (
//       <>
//         <Title>
//           <H5>
//             <Link to="/">{"<"} Home</Link>
//           </H5>
//         </Title>
//         <Wrapper>
//           <Header>
//             <h1>Create Account</h1>
//           </Header>
//           <div>
//             <RegisterFormWithRouter variables={initialValues} />
//             <p>
//               Don't have an account? <Link to="/signup">Create one now</Link>
//             </p>
//           </div>
//         </Wrapper>
//       </>
//     );
//   }
// }

// // Set network fetch policy to network only for security reasons
// // export default graphql(CurrentUser, {
// //   options: { fetchPolicy: "network-only" }
// // })(withRouter(Register));
// export default withRouter(Register);

import React from "react";

export default function Register() {
  return (
    <div>
      <p>nothing</p>
    </div>
  );
}
