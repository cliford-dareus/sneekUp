import React, { useState } from "react";
import { Form } from "../../../pages/styled-components";
import {
  FormButton,
  InputAndLabelContainer,
  InputAndLabelGroup,
  LabelField,
  RegisterInput,
} from "../styles";
import { UserType } from "../../../pages/Register";
import { Pin } from "../../../lib/PinHelper";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { register } from '../../../features/userSlice';

const PIN_MAX_LENGHT = 4;

const index = () => {
  const dispatch = useAppDispatch();
  const Navigate = useNavigate()
  const [userInfo, setUserInfo] = useState<UserType>({
    username: "",
    pin: "",
  });

  const onchanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (userInfo.pin.length >= 4) {
      return;
    }
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const onsubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { username, pin } = userInfo;

    if (username === "" || pin.length !== 4) {
      return;
    }

    try {
      const payload = {username, pin: Number(pin)}
      dispatch(register(payload));
      setUserInfo({ username: "", pin: "" });
      Navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={(e) => onsubmit(e)}>
      <InputAndLabelGroup>
        <LabelField>Your Name</LabelField>
        <InputAndLabelContainer>
          <span></span>
          <RegisterInput
            placeholder="eg.Harry"
            onChange={(event) => onchanged(event)}
            name="username"
            value={userInfo.username}
          />
        </InputAndLabelContainer>

        <LabelField>Your 4 digit Pin</LabelField>
        <InputAndLabelContainer>
          <span></span>
          <RegisterInput
            placeholder="eg.5555"
            type="number"
            onChange={(event) => onchanged(event)}
            name="pin"
            value={userInfo.pin}
            disabled={userInfo.pin.length >= PIN_MAX_LENGHT}
          />
        </InputAndLabelContainer>
      </InputAndLabelGroup>
      <FormButton type="submit">Sign Up</FormButton>
    </Form>
  );
};

export default index;
