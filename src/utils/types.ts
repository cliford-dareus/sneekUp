export type PinType = {
  create: (name: string, pin: number) => void;
  get: (name: string) => any;
  login: () => any;
};

export type PinTypeProps = {
  pinLength: number;
  pin: Array<number | undefined>;
  onPinChanged: (pinEntry: number | undefined, index: number) => void;
  isValidating: boolean;
  onsubmit: any;
};

export type UserType = {
    pin: number | null;
    isloggin: boolean | false;
}

export type TimeType = {
  hour: string;
  munites:string;
  session: string;
  day: string;
}