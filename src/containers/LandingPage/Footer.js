import React from "react";
import styled from "styled-components";
import { Link } from "../../components/Link";
import { H1 } from "../../components/H1";
import { P } from "../../components/P";
import { Button, InvertedButton } from "../../components/Button";
import { addToLocalStorageArray } from "utils";

function Footer() {
  addToLocalStorageArray("testers", "role");
  return (
    <Wrapper>
      <H1>Alcohol Delivery</H1>
      <P>We deliver alcohol to any point within 30 mins</P>
      <Section>
        <Link to="/login">
          <Button>Log In</Button>
        </Link>
        <Link to="/signup">
          <InvertedButton>Sign Up</InvertedButton>
        </Link>
      </Section>
    </Wrapper>
  );
}
export default Footer;

const Wrapper = styled.div`
  padding: 2px;
  margin: 0 auto;
  display: table;
  text-align: left;
  min-width: 400px;
  max-width: 450px;
  /* position: absolute; */
`;
const Section = styled.section`
  display: inline-block;
  text-align: center;

  width: 100%;
`;
