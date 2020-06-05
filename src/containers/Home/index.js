import React from "react";
import styled from "styled-components";
import { history } from "utils";

function Home() {
  console.log("history tuone", history);
  return (
    <Section>
      <h1>Everything is here</h1>
    </Section>
  );
}
export default Home;

const Section = styled.section`
  width: 93vw;
  padding: 10px;
  position: fixed;
  bottom: 1rem;
`;
