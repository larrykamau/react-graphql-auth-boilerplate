import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

function LandingPage() {
  return (
    <>
      <Header />
      <Section>
        <Footer />
      </Section>
    </>
  );
}
export default LandingPage;

const Section = styled.section`
  width: 93vw;
  padding: 10px;
  position: fixed;
  bottom: 1rem;
`;
