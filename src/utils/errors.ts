import kleur from "kleur";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const throwAndExit = (error: string): never => {
  console.error(kleur.red("Error: " + error.replace("Error: ", "").toString()));
  process.exit(-1);
};
