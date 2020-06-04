import gql from "graphql-tag";

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      success
      errors
      unarchiving
      token
      refreshToken
      unarchiving
      user {
        id
        username
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
