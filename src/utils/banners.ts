import kleur from "kleur";
import figlet from "figlet";

export const showTitleAndBanner = (): Promise<void> => {
  console.log(
    kleur.cyan(
      figlet.textSync("Injective TS CLI", { horizontalLayout: "full" })
    )
  );
  console.info(
    kleur.cyan(
      "A simple CLI tool to interact with Injective or just execute some utilities."
    )
  );

  return Promise.resolve();
};

export const showHelpBanner = (): Promise<void> => {
  console.log(
    kleur.cyan(
      figlet.textSync("Injective TS CLI", { horizontalLayout: "full" })
    )
  );

  console.info(
    kleur.cyan(
      "After installing the binary, you can simply run inj-ts and it a prompt will be launched where you can select the action you want to perform. Additionally you can just directly type the action you want to perform as the first argument after the binary inj-ts."
    )
  );

  return Promise.resolve();
};
