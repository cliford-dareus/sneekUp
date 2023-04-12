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
  /* border: 1px solid red; */
  border-radius: 0.5em;
  overflow: hidden;
  background-color: whitesmoke;
`;

export const InputField = styled.input`
  width: 100%;
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
