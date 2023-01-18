export const validateAddress = (address: string) => {
  if (!address.startsWith("inj")) {
    throw new Error("You have entered an invalid address");
  }

  if (address.length !== 42) {
    throw new Error("You have entered an invalid address");
  }
};
