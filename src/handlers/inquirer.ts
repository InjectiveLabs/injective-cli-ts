import inquirer from "inquirer";
import { handleConvertAddress } from "../actions/convert.js";
import { handleQueryForAddress } from "../actions/query.js";
import { handleCalculateForAddress } from "../actions/calculate.js";
import {
  INQUIRER_CALCULATOR_PROMPT,
  INQUIRER_CONVERT_ADDRESS_PROMPT,
  INQUIRER_CONVERT_PROMPT,
  INQUIRER_QUERY_PROMPT,
} from "../questions/index.js";
import { AddressConverter, Answer, Calculator, Query } from "../types/index.js";
import { throwAndExit } from "../utils/errors.js";

export const handleConvertAction = async (): Promise<void> => {
  return inquirer
    .prompt(INQUIRER_CONVERT_PROMPT.converters)
    .then((answer: Answer) => {
      if (!answer.convert) {
        throwAndExit(`The ${answer.convert} converter is not available`);
      }

      inquirer
        .prompt(INQUIRER_CONVERT_ADDRESS_PROMPT.address)
        .then((addressAnswer: Answer) => {
          try {
            console.log(
              handleConvertAddress(
                answer.convert as AddressConverter,
                addressAnswer.address
              )
            );
          } catch (e: unknown) {
            throwAndExit((e as string).toString());
          }
        });
    });
};

export const handleQueryAction = async (): Promise<void> => {
  return inquirer.prompt(INQUIRER_QUERY_PROMPT.query).then((answer: Answer) => {
    if (!answer.query) {
      throwAndExit(`The ${answer.query} query is not available`);
    }

    inquirer
      .prompt(INQUIRER_CONVERT_ADDRESS_PROMPT.address)
      .then(async (queryAnswer: Answer) => {
        try {
          console.log(
            await handleQueryForAddress(
              answer.query as Query,
              queryAnswer.address
            )
          );
        } catch (e: unknown) {
          throwAndExit((e as string).toString());
        }
      });
  });
};

export const handleCalculatorAction = async (): Promise<void> => {
  return inquirer
    .prompt(INQUIRER_CALCULATOR_PROMPT.calculator)
    .then((answer: Answer) => {
      if (!answer.calculator) {
        throwAndExit(`The ${answer.calculator} calculator is not available`);
      }

      inquirer
        .prompt(INQUIRER_CONVERT_ADDRESS_PROMPT.address)
        .then(async (calculatorAnswer: Answer) => {
          try {
            console.log(
              await handleCalculateForAddress(
                answer.calculator as Calculator,
                calculatorAnswer.address
              )
            );
          } catch (e: unknown) {
            throwAndExit((e as string).toString());
          }
        });
    });
};
