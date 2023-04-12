import React from "react";
import Register from "../../components/Forms/register";
import { FlexContainer, FormTitle, FormTitleAccent } from "../styled-components";
import { ForgetPinLink, LeftContainer, RigthContainer } from "../Login/styles";

const index = () => {
  return (
    <FlexContainer>
      <LeftContainer>
        <FormTitle>
          Welcome <br /> 2 <br /> <FormTitleAccent>Sneek</FormTitleAccent>{" "}
        </FormTitle>

        <Register />

        <ForgetPinLink to="/register">Forgot my Pin</ForgetPinLink>

        {/* <SocialContainer>
          <Anchor to="">
            <img src="" alt="" width="30" height="30" />
          </Anchor>
          <Anchor to="">
            <img src="" alt="" width="30" height="30" />
          </Anchor>
          <Anchor to="">
            <img src="" alt="" width="30" height="30" />
          </Anchor>
        </SocialContainer> */}
      </LeftContainer>
      <RigthContainer>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem numquam
        quam cum rerum maxime. Numquam ut nam doloribus ratione voluptates quasi
        possimus magni expedita provident. Tempore consectetur ea voluptatibus
        fugit.
      </RigthContainer>
    </FlexContainer>
  );
};

export default index;
