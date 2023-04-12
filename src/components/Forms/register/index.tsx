import React from "react";
import { Form } from "../../../pages/styled-components";
import {
  InputAndLabelContainer,
  InputAndLabelGroup,
  InputField,
  LabelField,
  PinPromp,
} from "../styles";

const index = () => {
  return (
    <Form>
      <PinPromp>Create an Account</PinPromp>

      <InputAndLabelGroup>
        <InputAndLabelContainer>
          <LabelField>Your Name</LabelField>
          <InputField />
        </InputAndLabelContainer>

        <InputAndLabelContainer>
          <LabelField>Your 4 digit Pin</LabelField>
          <InputField />
        </InputAndLabelContainer>
      </InputAndLabelGroup>
    </Form>
  );
};

export default index;
