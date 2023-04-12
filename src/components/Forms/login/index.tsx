import React, { useRef } from "react";
import { Button, Form } from "../../../pages/styled-components";
import { FormButton, InputContainer, InputField, InputGroup, PinPromp } from "../styles";
import { removeValuesFromArray } from "../../../lib/PinHelper";

type PinType = {
  pinLength: number;
  pin: Array<number | undefined>;
  onPinChanged: (pinEntry: number | undefined, index: number) => void;
  isValidating: boolean;
};

const PIN_MIN_VALUE = 0;
const PIN_MAX_VALUE = 9;
const BACKSPACE_KEY = "Backspace";

const index: React.FC<PinType> = ({
  pinLength,
  pin,
  isValidating,
  onPinChanged,
  //   changePinFocus,
}) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const changePinFocus = (pinIndex: number) => {
    const refs = inputRefs.current[pinIndex];

    if (refs) {
      refs.focus();
    }
  };

  const onchange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const previousValue = event.target.defaultValue;
    const valuesArray = event.target.value.split("");

    removeValuesFromArray(valuesArray, previousValue);
    const value = valuesArray.pop();

    if (!value) {
      return;
    }
    const pinNumber = Number(value.trim());
    if (isNaN(pinNumber) || value.length === 0) {
      return alert("Enter a number");
    }

    if (pinNumber >= PIN_MIN_VALUE && pinNumber <= PIN_MAX_VALUE) {
      onPinChanged(pinNumber, index);
      if (index < pinLength - 1) {
        changePinFocus(index + 1);
      }
    }
  };

  const onKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const keyboardKeyCode = event.nativeEvent.code;
    if (keyboardKeyCode !== BACKSPACE_KEY) {
      return;
    }

    if (pin[index] === undefined) {
      changePinFocus(index - 1);
    } else {
      onPinChanged(undefined, index);
    }
  };

  return (
    <Form>
      <PinPromp>Enter your Pin.</PinPromp>
      <InputGroup>
        {Array.from({ length: pinLength }, (_, index) => (
          <InputContainer
            key={index}
          >
            <InputField
              disabled={isValidating}
              ref={(el) => {
                if (el) {
                  inputRefs.current[index] = el;
                }
              }}
              onChange={(event) => onchange(event, index)}
              onKeyDown={(event) => onKeyDown(event, index)}
              value={pin[index] || ""}
            />
          </InputContainer>
        ))}
      </InputGroup>
      <FormButton >Login</FormButton>
    </Form>
    
  );
};

export default index;
