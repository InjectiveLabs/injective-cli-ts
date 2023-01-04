import { Action, AddressConverter } from "../types/index.js";

export const INQUIRER_MAIN_PROMPT = {
  actions: [
    {
      type: "list",
      name: "action",
      message: "Choose the action you want to perform",
      choices: Object.values(Action),
    },
  ],
};

export const INQUIRER_CONVERT_PROMPT = {
  converters: [
    {
      type: "list",
      name: "convert",
      message: "Choose the converter you want to use",
      choices: Object.values(AddressConverter),
    },
  ],
};

export const INQUIRER_CONVERT_ADDRESS_PROMPT = {
  address: [
    {
      type: "input",
      name: "address",
      message: "Enter the address you want to convert",
    },
  ],
};
