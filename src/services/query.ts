import { IndexerGrpcAccountPortfolioApi } from "@injectivelabs/sdk-ts";
import { ENDPOINTS } from "../utils/constants.js";

export const fetchPortfolioValue = async (address: string) => {
  const portfolio = await new IndexerGrpcAccountPortfolioApi(
    ENDPOINTS.indexer
  ).fetchAccountPortfolio(address);

  return portfolio;
};
