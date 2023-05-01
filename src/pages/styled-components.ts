import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const spinner = keyframes`
  100% {
     transform: rotate(1turn);
  }
`;

export const PageContainer = styled.div`
  width: 100vw;
  /* height: 100vh; */
  /* padding: 1em; */
`;

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  padding: 1em;
`;

export const SectionTitle = styled.h2`
  /* width: min-content; */
  font-size: 2rem;
  line-height: 1;

  @media screen and (min-width: 760px) {
    font-size: 4rem;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;

  @media screen and (min-width: 760px) {
    flex-direction: row;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1em;
  display: flex;
`;

export const FormTitle = styled.h1`
  width: 100%;
  font-size: clamp(3rem, 25vw, 4rem);
  line-height: 1;
  /* text-align: center; */

  @media screen and (min-width: 520px) {
    width: 75%;
  }
`;

export const FormTitleAccent = styled.span`
  color: purple;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 520px) {
    width: 75%;
  }
`;

// Pass prop to this button
export const Button = styled.button`
  display: inline-block;
  background-color: whitesmoke;
  color: black;
  padding: 0.5em;
  font-size: 1.1rem;
  font-weight: bold;
  outline: none;
  border: none;
  border-radius: 0.5em;
`;

export const SocialContainer = styled.div`
  display: flex;
  gap: 1em;
  position: absolute;
  bottom: 1em;
`;

export const Anchor = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: inherit;
`;

export const Loader = styled.div`
  width: 3em;
  height: 3em;
  border-radius: 50%;
  background: radial-gradient(farthest-side,purple 94%,#0000) top/9px 9px no-repeat,
          conic-gradient(#0000 30%,purple);
   -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 9px),#000 0);
  animation: ${spinner} 1s infinite linear;
`;
