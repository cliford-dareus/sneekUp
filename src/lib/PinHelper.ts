import { PinType } from "../utils/types";

export const removeValuesFromArray = (valuesArray: string[], value: string) => {
  const valueIndex = valuesArray.findIndex((entry) => entry === value);
  if (valueIndex === -1) {
    return;
  }
  valuesArray.splice(valueIndex, 1);
};

const fakename = "fakename";

export class PinServices implements PinType {
  constructor() {}

  create(name: string, pin: number) {
    const alreadyExist = this.get(fakename);
    if (alreadyExist?.length !== 0) {
      return { msg: "User alreadyExisted", pin: alreadyExist.pin };
    }

    localStorage.setItem(fakename, JSON.stringify({ pin, isloggin: false }));
    return { msg: "Account created..." };
  }

  get(name: string) {
    const user = localStorage.getItem(fakename);
    return user ? JSON.parse(user) : [];
  }

  login() {
    const alreadyExist = this.get(fakename);
    if (alreadyExist?.length === 0) {
      return { msg: "Created an Account to login..." };
    }
    const loginUser = { ...alreadyExist, isloggin: true };
    localStorage.setItem(fakename, JSON.stringify(loginUser));
  }
}

export const Pin = new PinServices();
