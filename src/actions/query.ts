import { fetchPortfolioValue } from "../services/query.js";
import { Query } from "../types/enums.js";
import { validateAddress } from "../utils/validations.js";

const queryPortfolio = async (address: string) => {
  validateAddress(address);

  const portfolio = await fetchPortfolioValue(address);

  return JSON.stringify(portfolio);
};

const queryBankBalances = async (address: string) => {
  validateAddress(address);

  const portfolio = await fetchPortfolioValue(address);

  return JSON.stringify(portfolio.bankBalancesList);
};

export const handleQueryForAddress = async (
  query: Query,
  address?: string
): Promise<string> => {
  if (!address) {
    throw new Error(`The ${address} address is not valid`);
  }

  switch (query) {
    case Query.Portfolio:
      return await queryPortfolio(address);
    case Query.BankBalances:
      return await queryBankBalances(address);
    default:
      throw new Error(`The ${query} query is not available`);
  }
};
