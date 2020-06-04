import styled, { keyframes } from "styled-components";
import { P } from "../../components/P";

export const spin = keyframes`
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const SpinLogo = styled.div`
  svg {
    justify-self: center;
    color: blue;
    width: 1px;
    /* height: 1rem; */
    animation: ${spin} 1s linear infinite;
  }
`;
export const Blank = styled.div`
  margin: 1rem;
`;
export const Wrapper = styled.div`
  display: grid;
  width: 100vw;
  padding: 2px;
  margin: 0 auto;
  display: grid;
  position: fixed;
  max-width: 420px;
  bottom: 2rem;
  > form {
    padding: 0px 10px;
  }
`;
export const Break = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0rem;
  font-size: 0.7rem;
`;

export const NewP = styled(P)`
  color: violet;
  margin: 0.625rem 0 1.5rem 0;
  float: right;
  text-decoration: None;
`;
export const Title = styled.div`
  width: 6rem;
  padding: 0;
  margin: 0;
  top: 1rem;
  left: 0.5rem;
  z-index: 1001;
`;
export const Header = styled.div`
  padding: 1rem 10px;
  margin: 1rem 0;
  text-align: left;
  top: 7rem;
`;
export const FormWrapper = styled.form`
  max-width: 450px;
  margin: 0 auto;

  /* // positioning context */
  > div {
    position: relative;
    background: white;
    border-bottom: 1px solid #ccc;

    /* // Looks like placeholder */
    > label {
      opacity: 0.3;
      font-weight: bold;
      position: absolute;
      top: 22px;
      left: 20px;
    }

    > input[type="text"],
    > input[type="email"],
    > input[type="password"] {
      width: 100%;
      border: 0;
      padding: 20px 20px 20px 50px;
      background: #eee;

      &:focus {
        /* // removing default focus style */
        outline: 0;
        /* // adding new one */
        background: white;

        & + label {
          opacity: 0;
        }
      }

      &:valid {
        background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/check.svg);
        background-size: 20px;
        background-repeat: no-repeat;
        background-position: 20px 20px;
        & + label {
          opacity: 0;
        }
      }

      &:invalid:not(:focus):not(:placeholder-shown) {
        background: palevioletred;
        & + label {
          opacity: 0;
        }
      }

      &:invalid:focus:not(:placeholder-shown) {
        & ~ .requirements {
          max-height: 200px;
          padding: 0 30px 20px 50px;
        }
      }
    }

    .requirements {
      padding: 0 30px 0 50px;
      color: #999;
      max-height: 0;
      transition: 0.28s;
      overflow: hidden;
      color: red;
      font-style: italic;
    }
  }

  input[type="submit"] {
    display: block;
    width: 100%;
    margin: 20px 0;
    background: #41d873;
    color: white;
    border: 0;
    padding: 20px;
    font-size: 1.2rem;
  }
`;

export const Loader = styled.div`
  &,
  & :before,
  & :after {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: load7 1.8s infinite ease-in-out;
    animation: load7 1.8s infinite ease-in-out;
  }
  & {
    color: #ffffff;
    font-size: 10px;
    margin: 80px auto;
    position: relative;
    text-indent: -9999em;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  & :before,
  & :after {
    content: "";
    position: absolute;
    top: 0;
  }
  & :before {
    left: -3.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  & :after {
    left: 3.5em;
  }
  @-webkit-keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
  @keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
`;
