import React, { useEffect, useState } from "react";
import {
  FlexContainer,
  FormTitle,
  FormTitleAccent,
} from "../styled-components";
import { ForgetPinLink, LeftContainer, RigthContainer } from "./styles";
import PinForm from "../../components/Forms/login";
import SocialGroup from "../../components/SocialGroup";
import { Pin } from "../../lib/PinHelper";
import { useNavigate } from "react-router-dom";

const index = () => {
  const Navigate = useNavigate();
  const [pin, setPin] = useState<Array<number | undefined>>(new Array(4));
  const [isValidating, setIsValidating] = useState<boolean>(false);

  const onPinChanged = (pinEntry: number | undefined, index: number) => {
    const newPin = [...pin];
    newPin[index] = pinEntry;
    setPin(newPin);
  };

  const onsubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const storedPin = Pin.get("fakename");
    const pinEntered = Number(pin.join(""));

    if (!pinEntered) {
      return;
    }

    try {
      if (Number(storedPin?.pin) === pinEntered) {
        setIsValidating(true);
        Pin.login()
        setPin([])
        // return;
      }
    } catch (error) {}
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsValidating(false);
      Navigate('/')
    }, 5000);

    return ()=> {
      clearTimeout(timeout);
    }
  }, [isValidating]);

  return (
    <FlexContainer>
      <LeftContainer>
        <FormTitle>
          Welcome 2 <br /> <FormTitleAccent>Sneek</FormTitleAccent>{" "}
        </FormTitle>

        <PinForm
          pinLength={4}
          pin={pin}
          isValidating={isValidating}
          onPinChanged={onPinChanged}
          onsubmit={onsubmit}
        />

        <ForgetPinLink to="/register">Forgot my Pin</ForgetPinLink>

        <SocialGroup />
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
