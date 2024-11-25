import { Action, AddressConverter, Query } from "../types/index.js";
import { DistinctQuestion } from "inquirer";

export const INQUIRER_MAIN_PROMPT = {
  actions: [
    {
      type: "list",
      name: "action",
      message: "Choose the action you want to perform",
      choices: Object.values(Action),
    },
  ] as DistinctQuestion[],
};

export const INQUIRER_QUERY_PROMPT = {
  query: [
    {
      type: "list",
      name: Action.query,
      message: "Choose the query you want to perform",
      choices: Object.values(Query),
    },
  ] as DistinctQuestion[],
};

export const INQUIRER_CONVERT_PROMPT = {
  converters: [
    {
      type: "list",
      name: Action.convert,
      message: "Choose the converter you want to use",
      choices: Object.values(AddressConverter),
    },
  ] as DistinctQuestion[],
};

export const INQUIRER_CONVERT_ADDRESS_PROMPT = {
  address: [
    {
      type: "input",
      name: "address",
      message: "Enter your address",
    },
  ] as DistinctQuestion[],
};
