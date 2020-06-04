import React from "react";
import { H5 } from "../../components/H5";
import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <H5>KIU DELIVERY</H5>
    </Wrapper>
  );
}
export default Header;

const Wrapper = styled.div`
  width: 6rem;
  padding: 0;
  margin: 0;
  top: 1rem;
  left: 1rem;
  z-index: 1001;
`;
