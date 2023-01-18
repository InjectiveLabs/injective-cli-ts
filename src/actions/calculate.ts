import utils from "@injectivelabs/utils";
import {
  fetchBankBalancesWithTokenAndUsdPrice,
  fetchPortfolioBalancesWithTokenAndUsdPrice,
} from "../services/query.js";
import { Calculator } from "../types/enums.js";
import { validateAddress } from "../utils/validations.js";

const { BigNumberInBase, BigNumberInWei } = utils;

const calculateBankValue = async (address: string) => {
  validateAddress(address);

  const bankBalances = await fetchBankBalancesWithTokenAndUsdPrice(address);

  const bankBalanceWorth = bankBalances.reduce((total, balance) => {
    return total.plus(
      new BigNumberInWei(balance.amount)
        .toBase(balance.token.decimals)
        .times(balance.usdPrice)
    );
  }, new BigNumberInBase(0));

  return bankBalanceWorth.toFormat(4) + " USD";
};

const calculatePortfolioValue = async (address: string) => {
  validateAddress(address);

  const subaccountBalances = await fetchPortfolioBalancesWithTokenAndUsdPrice(
    address
  );

  const subaccountBalanceWorth = subaccountBalances.reduce((total, balance) => {
    return total.plus(
      new BigNumberInWei(balance.amount)
        .toBase(balance.token.decimals)
        .times(balance.usdPrice)
    );
  }, new BigNumberInBase(0));

  return subaccountBalanceWorth.toFormat(4) + " USD";
};

const calculateBankAndPortfolioValue = async (address: string) => {
  validateAddress(address);

  const subaccountBalances = await fetchPortfolioBalancesWithTokenAndUsdPrice(
    address
  );
  const bankBalances = await fetchBankBalancesWithTokenAndUsdPrice(address);

  const subaccountBalanceWorth = subaccountBalances.reduce((total, balance) => {
    return total.plus(
      new BigNumberInWei(balance.amount)
        .toBase(balance.token.decimals)
        .times(balance.usdPrice)
    );
  }, new BigNumberInBase(0));

  const bankBalanceWorth = bankBalances.reduce((total, balance) => {
    return total.plus(
      new BigNumberInWei(balance.amount)
        .toBase(balance.token.decimals)
        .times(balance.usdPrice)
    );
  }, new BigNumberInBase(0));

  return bankBalanceWorth.plus(subaccountBalanceWorth).toFormat(4) + " USD";
};

export const handleCalculateForAddress = async (
  calculator: Calculator,
  address?: string
): Promise<string> => {
  if (!address) {
    throw new Error(`The ${address} address is not valid`);
  }

  switch (calculator) {
    case Calculator.BankValue:
      return await calculateBankValue(address);
    case Calculator.PortfolioValue:
      return await calculatePortfolioValue(address);
    case Calculator.PortfolioAndBankValue:
      return await calculateBankAndPortfolioValue(address);
    default:
      throw new Error(`The ${calculator} calculator is not available`);
  }
};
