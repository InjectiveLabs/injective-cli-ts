import { Action, Answer } from "../types/index.js";
import { throwAndExit } from "../utils/errors.js";
import {
  handleCalculatorAction,
  handleConvertAction,
  handleQueryAction,
} from "./inquirer.js";

/**
 * The main handler when we are prompting the user to select an action
 */
export const handleInquirer = async (answer: Answer): Promise<void> => {
  if (!answer.action) {
    throwAndExit(`Action ${answer.action} is not supported`);
  }

  switch (answer.action) {
    case Action.convert:
      return handleConvertAction();
    case Action.query:
      return handleQueryAction();
    case Action.calculator:
      return handleCalculatorAction();
    default:
      throwAndExit(`Action ${answer.action} is not supported`);
  }
};

/**
 * The main handler when the user passes the action as an argument
 */
export const handleAction = async (action: Action): Promise<void> => {
  switch (action) {
    case Action.convert:
      return handleConvertAction();
    case Action.query:
      return handleQueryAction();
    case Action.calculator:
      return handleCalculatorAction();
    default:
      throwAndExit(`Action ${action} is not supported`);
  }
};
