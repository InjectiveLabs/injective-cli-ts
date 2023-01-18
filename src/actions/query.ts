import utils from "@injectivelabs/utils";
import {
  fetchBankBalancesWithTokenAndUsdPrice,
  fetchPortfolioValue,
} from "../services/query.js";
import { Query } from "../types/enums.js";
import { validateAddress } from "../utils/validations.js";

const { BigNumberInBase, BigNumberInWei } = utils;

const queryPortfolioAndBankValue = async (address: string) => {
  validateAddress(address);

  const bankBalances = await fetchBankBalancesWithTokenAndUsdPrice(address);
  const portfolioValue = await fetchPortfolioValue(address);

  const bankBalanceWorth = bankBalances.reduce((total, balance) => {
    return total.plus(
      new BigNumberInWei(balance.amount)
        .toBase(balance.token.decimals)
        .times(balance.usdPrice)
    );
  }, new BigNumberInBase(0));

  return (
    bankBalanceWorth.plus(portfolioValue.portfolioValue).toFormat(4) + " USD"
  );
};

const queryPortfolioValue = async (address: string) => {
  validateAddress(address);

  const portfolioValue = await fetchPortfolioValue(address);

  return portfolioValue.portfolioValue + " USD";
};

const queryBankValue = async (address: string) => {
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

export const handleQueryForAddress = async (
  query: Query,
  address?: string
): Promise<string> => {
  if (!address) {
    throw new Error(`The ${address} address is not valid`);
  }

  switch (query) {
    case Query.PortfolioValue:
      return await queryPortfolioValue(address);
    case Query.BankValue:
      return await queryBankValue(address);
    case Query.PortfolioAndBankValue:
      return await queryPortfolioAndBankValue(address);
    default:
      throw new Error(`The ${query} query is not available`);
  }
};
