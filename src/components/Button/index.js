import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  color: #0c0032;
  /* font-size: 1em; */
  margin: 5px 0;
  padding: 0.5em 1em;
  border: 1px solid #0c0032;
  border-radius: 8px;
  max-width: 400px;
`;

// A new component based on Button, but with some override styles
export const InvertedButton = styled(Button)`
  color: #fff;
  border-color: #fff;
  background: #0c0032;
`;
