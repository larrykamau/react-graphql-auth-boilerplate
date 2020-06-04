import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

class Loader extends Component {
  render() {
    return (
      <Wrapper>
        <div />
        <div />
        <div />
        <div />
      </Wrapper>
    );
  }
}
export default Loader;

const elipse1 = keyframes`
0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;
const elipse2 = keyframes`
0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`;
const elipse3 = keyframes`
0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;
const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 0 auto;
  height: 10px;

  > div {
    position: absolute;
    /* top: 33px; */
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #240090;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  > div:nth-child(1) {
    left: -31px;
    animation: ${elipse1} 0.6s infinite;
  }
  > div:nth-child(2) {
    left: -31px;
    animation: ${elipse2} 0.6s infinite;
  }
  > div:nth-child(3) {
    left: -2px;
    animation: ${elipse2} 0.6s infinite;
  }
  > div:nth-child(4) {
    left: 8px;
    animation: ${elipse3} 0.6s infinite;
  }
`;
