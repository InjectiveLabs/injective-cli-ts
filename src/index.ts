import inquirer from "inquirer";
import parseArguments from "minimist";
import { handleInquirer, handleAction } from "./handlers/index.js";
import { INQUIRER_MAIN_PROMPT } from "./questions/index.js";
import { Action } from "./types/index.js";
import {
  showTitleAndBanner,
  showHelpBanner,
  throwAndExit,
} from "./utils/index.js";

(async () => {
  const args = parseArguments(process.argv.slice(2));
  const availableActions = Object.values(Action) as string[];
  const [action] = args._;

  /**
   * Help banner
   */
  if (args.help || args.h || action === "help") {
    return showHelpBanner();
  }

  /**
   * No action is requested by the user so we prompt the user
   * to execute some action
   */
  if (args._.length === 0) {
    return showTitleAndBanner().then(() => {
      inquirer.prompt(INQUIRER_MAIN_PROMPT.actions).then(handleInquirer);
    });
  }

  if (!availableActions.includes(action)) {
    throwAndExit(
      `Action ${action} is not available. Available actions are: ${availableActions.join(
        " | "
      )}`
    );
  }

  return handleAction(action as Action);
})();
