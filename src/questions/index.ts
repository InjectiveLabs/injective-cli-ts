import { Action, AddressConverter, Calculator, Query } from "../types/index.js";

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

export const INQUIRER_QUERY_PROMPT = {
  query: [
    {
      type: "list",
      name: Action.query,
      message: "Choose the query you want to perform",
      choices: Object.values(Query),
    },
  ],
};

export const INQUIRER_CALCULATOR_PROMPT = {
  calculator: [
    {
      type: "list",
      name: Action.calculator,
      message: "Choose the calculation you want to perform",
      choices: Object.values(Calculator),
    },
  ],
};

export const INQUIRER_CONVERT_PROMPT = {
  converters: [
    {
      type: "list",
      name: Action.convert,
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
      message: "Enter your address",
    },
  ],
};
