import styled from "styled-components";

export const A = styled.a`
  color: blue; /* ${p => p.theme.primary}; */
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }
`;
