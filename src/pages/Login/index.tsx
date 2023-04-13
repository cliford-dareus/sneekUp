import React, { useEffect, useState } from "react";
import {
  FlexContainer,
  FormTitle,
  FormTitleAccent,
} from "../styled-components";
import { ForgetPinLink, LeftContainer, RigthContainer } from "./styles";
import PinForm from "../../components/Forms/login";
import SocialGroup from "../../components/SocialGroup";
import { Pin, timeout } from "../../lib/PinHelper";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { login } from "../../features/userSlice";

const index = () => {
  const Navigate = useNavigate();
  const [pin, setPin] = useState<Array<number | undefined>>(new Array(4));
  const [isValidating, setIsValidating] = useState<boolean>(false);
  const user = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  const onPinChanged = (pinEntry: number | undefined, index: number) => {
    const newPin = [...pin];
    newPin[index] = pinEntry;
    setPin(newPin);
  };

  const onsubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const storedPin = user?.pin;
    const pinEntered = Number(pin.join(""));

    if (!pinEntered) {
      return;
    }

    try {
      if (Number(storedPin) === pinEntered) {
        setIsValidating(true);
        await timeout(5000);
        dispatch(login());
        Navigate("/");
        setPin([]);
      } else {
        console.log("failed");
      }
    } catch (error) {}
  };

  useEffect(() => {
    const storedPin = Pin.get("fakename");
    if (storedPin.isloggin) {
      Navigate("/");
    }
  }, []);

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
