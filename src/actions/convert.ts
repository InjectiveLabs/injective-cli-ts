import { getEthereumAddress, getInjectiveAddress } from "@injectivelabs/sdk-ts";
import { AddressConverter } from "../types/index.js";
import { validateAddress } from "../utils/validations.js";

export const injToEth = (address: string): string => {
  const convert = (address: string) => {
    validateAddress(address);

    return getEthereumAddress(address);
  };

  return convert(address);
};

export const injToSubaccount = (address: string): string => {
  const convert = (address: string) => {
    validateAddress(address);

    const ethAddress = getEthereumAddress(address);
    const suffix = "0".repeat(24);

    return `${ethAddress}${suffix}`;
  };

  return convert(address);
};

export const ethToSubaccount = (address: string): string => {
  const convert = (address: string) => {
    if (!address.startsWith("0x")) {
      throw new Error("You have entered an invalid address");
    }

    if (address.length !== 42) {
      throw new Error("You have entered an invalid address");
    }

    const suffix = "0".repeat(24);

    return `${address}${suffix}`;
  };

  return convert(address);
};

export const ethToInj = (address: string): string => {
  const convert = (address: string) => {
    if (!address.startsWith("0x")) {
      throw new Error("You have entered an invalid address");
    }

    if (address.length !== 42) {
      throw new Error("You have entered an invalid address");
    }

    return getInjectiveAddress(address);
  };

  return convert(address);
};

export const subaccountToInj = (address: string): string => {
  const convert = (address: string) => {
    if (!address.startsWith("0x")) {
      throw new Error("You have entered an invalid address");
    }

    if (address.length !== 66) {
      throw new Error("You have entered an invalid address");
    }

    const ethAddress = address.slice(0, 42);

    return getInjectiveAddress(ethAddress);
  };

  return convert(address);
};

export const subaccountToEth = (address: string): string => {
  const convert = (address: string) => {
    if (!address.startsWith("0x")) {
      throw new Error("You have entered an invalid address");
    }

    if (address.length !== 66) {
      throw new Error("You have entered an invalid address");
    }

    return address.slice(0, 42);
  };

  return convert(address);
};

export const handleConvertAddress = (
  converter: AddressConverter,
  address?: string
): string => {
  if (!address) {
    throw new Error(`The ${address} address is not valid`);
  }

  switch (converter) {
    case AddressConverter.EthToInj:
      return ethToInj(address);
    case AddressConverter.EthToSubaccount:
      return ethToSubaccount(address);
    case AddressConverter.InjToEth:
      return injToEth(address);
    case AddressConverter.InjToSubaccount:
      return injToSubaccount(address);
    case AddressConverter.SubaccountToEth:
      return subaccountToEth(address);
    case AddressConverter.SubaccountToInj:
      return subaccountToInj(address);
    default:
      throw new Error(`The ${converter} converter is not available`);
  }
};
