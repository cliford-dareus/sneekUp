import React, { useState } from "react";
import {
  Anchor,
  FlexContainer,
  FormTitle,
  FormTitleAccent,
  SocialContainer,
} from "../styled-components";
import { ForgetPinLink, LeftContainer, RigthContainer } from "./styles";
import PinForm from "../../components/Forms/login";

const index = () => {
  const [pin, setPin] = useState<Array<number | undefined>>(new Array(4));
  const [isValidating, setIsValidating] = useState<boolean>(false);

  const onPinChanged = (pinEntry: number | undefined, index: number) => {
    const newPin = [...pin];
    newPin[index] = pinEntry;
    setPin(newPin);
  };

  return (
    <FlexContainer>
      <LeftContainer>
        <FormTitle>
          Welcome <br /> 2 <br /> <FormTitleAccent>Sneek</FormTitleAccent>{" "}
        </FormTitle>

        <PinForm
          pinLength={4}
          pin={pin}
          isValidating={isValidating}
          onPinChanged={onPinChanged}
        />

        <ForgetPinLink to="/register">Forgot my Pin</ForgetPinLink>

        <SocialContainer>
          <Anchor to="">
            <img src="" alt="" width="30" height="30" />
          </Anchor>
          <Anchor to="">
            <img src="" alt="" width="30" height="30" />
          </Anchor>
          <Anchor to="">
            <img src="" alt="" width="30" height="30" />
          </Anchor>
        </SocialContainer>
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
