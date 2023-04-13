import styled from "styled-components";
import { Button } from "../../pages/styled-components";

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: 1em;
  margin-top: 1em;
`;

export const InputContainer = styled.div`
  width: 23%;
  aspect-ratio: 1;
  border-radius: 0.5em;
  overflow: hidden;
  background-color: whitesmoke;

  @media screen and (min-width: 420px) {
    aspect-ratio: 1/1;
  }
`;

export const InputField = styled.input`
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.9em;
  text-align: center;
  outline: none;
  border: none;
  background-color: transparent;
`;

export const PinPromp = styled.p``;

export const FormButton = styled(Button)`
  margin-top: 1em;
`;

export const LabelField = styled.label``;

export const InputAndLabelContainer = styled.div`
  background-color: whitesmoke;
  border-radius: .5em;
  overflow: hidden;
`;

export const InputAndLabelGroup = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: column;
  margin-top: 1em;
`;

export const RegisterInput = styled(InputField)`
  width: 80%;
  height: 100%;
  font-size: 1rem;
  font-weight: normal;
  padding: .9em;
  text-align: left;
`;