import styled from "styled-components";

export const LayoutContainer = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #333;
  background-blend-mode: multiply;
`;


export const Main = styled.main`
  margin-inline: 2%;
  overflow: hidden;

  @media screen and (min-width: 64em){
    margin-inline: 8%;
  }

  @media screen and (min-width: 85.54em){
    margin-inline: 12%;
  }

  @media screen and (min-width: 120em){
    margin-inline: 18%;
  }
`;