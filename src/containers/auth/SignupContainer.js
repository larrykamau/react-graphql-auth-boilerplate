import { useMutation } from "react-apollo";
import { withRouter } from "react-router-dom";
import gql from "graphql-tag";

const signupMutation = gql`
  mutation Signup($email: String!, $name: String!, $password: String!) {
    signup(email: $email, name: $name, password: $password) {
      path
      message
    }
  }
`;

const SignupContainer = props => {
  const [mutate] = useMutation(signupMutation);

  async function submit(values) {
    const { data } = await mutate({
      variables: values
    });
    if (data) {
      return data.signup;
    }
    return null;
  }

  function onFinish() {
    props.history.push("/");
  }

  return props.children({ submit, onFinish });
};

export default withRouter(SignupContainer);
