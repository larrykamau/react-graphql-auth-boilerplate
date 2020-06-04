import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const OTHER_QUERY = gql`
  query {
    user(id: "VXNlck5vZGU6Nw==") {
      username
      verified
    }
  }
`;

function Profile() {
  const { loading, error, data } = useQuery(OTHER_QUERY, {
    variables: { id: "VXNlck5vZGU6Nw==" }
  });
  if (loading) return <p>Loading ...</p>;
  return (
    <div>
      <h2>Profile page</h2>
      <div>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
}

export default Profile;
