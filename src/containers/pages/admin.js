import React from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Button } from "../../components/Button";

const SIGNUP_MUTATION = gql`
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
      password2: $password2 # email: "dan5@gmail.com" # password1: "admin9999" # password2: "admin9999" # username: "SomeoneElse"
    ) {
      success
      errors
      token
      refreshToken
    }
  }
`;

function Admin(props) {
  const values = {
    email: "dan6@gmail.com",
    password1: "admin9999",
    password2: "admin9999",
    username: "anotherdan6"
  };
  const [addTodo, { loading, error, data }] = useMutation(SIGNUP_MUTATION);

  // const { loading, error, data } = useMutation(SIGNUP_MUTATION, {
  //   variables: values
  // });
  console.log("values", data);
  console.log("loading", loading);
  console.log("error", error);
  if (loading) return <p>Loading ...</p>;
  return (
    <div>
      <h2>Admin/Rider page</h2>
      <h4>Errors</h4>
      <Button onClick={() => addTodo({ variables: values })}>just check</Button>
      <div>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
      <h4>Data</h4>
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
}
export default Admin;
