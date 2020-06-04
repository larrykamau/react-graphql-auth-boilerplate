import gql from "graphql-tag";

export const PASSWORD_CHANGE = gql`
  mutation PasswordChange(
    $oldPassword: String!
    $newPassword1: String!
    $newPassword2: String!
  ) {
    passwordChange(
      oldPassword: $oldPassword
      newPassword1: $newPassword1
      newPassword2: $newPassword2
    ) {
      success
      errors
      token
      refreshToken
    }
  }
`;
export const SEND_PASSWORD_RESET_EMAIL = gql`
  mutation SendPasswordResetEmail($email: String!) {
    sendPasswordResetEmail(email: $email) {
      success
      errors
    }
  }
`;
export const PASSWORD_RESET = gql`
  mutation($token: String!, $newPassword1: String!, $newPassword2: String!) {
    passwordReset(
      token: $token
      newPassword1: $newPassword1
      newPassword2: $newPassword2
    ) {
      success
      errors
    }
  }
`;
export const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      payload
      refreshToken
      refreshExpiresIn
      success
      errors
      unarchiving
      token
      user {
        id
        email
        firstName
        lastName
        phoneNumber
        dateOfBirth
        isRider
        secondaryEmail
        avatar
      }
    }
  }
`;
export const SIGNUP_MUTATION = gql`
  mutation(
    $email: String!
    $username: String!
    $password1: String!
    $password2: String!
  ) {
    register(
      email: $email
      username: $username
      password1: $password1
      password2: $password2
    ) {
      success
      errors
      token
      refreshToken
    }
  }
`;
export const VERIFY_MUTATION = gql`
  mutation($token: String!) {
    verifyAccount(token: $token) {
      success
      errors
    }
  }
`;
export const RESEND_ACTIVATION_EMAIL_MUTATION = gql`
  mutation($email: String!) {
    resendActivationEmail(email: $email) {
      success
      errors
    }
  }
`;
