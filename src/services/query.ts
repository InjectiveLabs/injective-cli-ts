import {
  Address,
  ChainGrpcBankApi,
  IndexerGrpcAccountApi,
} from "@injectivelabs/sdk-ts";
import { Token } from "@injectivelabs/token-metadata";
import { sleep } from "@injectivelabs/utils";
import {
  coinGeckoService,
  denomClient,
  ENDPOINTS,
} from "../utils/constants.js";

export const fetchBankBalancesWithTokenAndUsdPrice = async (
  address: string
) => {
  const bankApi = new ChainGrpcBankApi(ENDPOINTS.grpc);

  const bankBalancesWithTokenAndPrice = [];
  const { balances } = await bankApi.fetchBalances(address);

  // TODO - add support for pagination
  for (let i = 0; i < balances.length; i++) {
    const token = denomClient.getDenomToken(balances[i].denom);

    if (token && token.coinGeckoId) {
      try {
        const usdPrice = await coinGeckoService.fetchUsdPrice(
          token.coinGeckoId
        );

        if (usdPrice) {
          bankBalancesWithTokenAndPrice.push({
            ...balances[i],
            token,
            usdPrice: usdPrice,
          });
        }
      } catch (e) {
        console.log(e);
        continue;
      }
    }

    await sleep(2500);
  }

  return bankBalancesWithTokenAndPrice as {
    token: Token;
    denom: string;
    amount: string;
    usdPrice: number;
  }[];
};

export const fetchPortfolioValue = async (address: string) => {
  const accountApi = new IndexerGrpcAccountApi(ENDPOINTS.indexer);

  const portfolioValue = await accountApi.fetchPortfolio(address);

  return portfolioValue;
};

export const fetchPortfolioBalancesWithTokenAndUsdPrice = async (
  address: string
) => {
  const accountApi = new IndexerGrpcAccountApi(ENDPOINTS.indexer);

  const subaccountId = Address.fromBech32(address).getSubaccountId();
  const balances = await accountApi.fetchSubaccountBalancesList(subaccountId);

  const subaccountBalancesWithTokenAndPrice = [];

  for (let i = 0; i < balances.length; i++) {
    const token = denomClient.getDenomToken(balances[i].denom);
    const deposit = balances[i].deposit;

    if (token && token.coinGeckoId) {
      try {
        const usdPrice = await coinGeckoService.fetchUsdPrice(
          token.coinGeckoId
        );

        if (usdPrice) {
          subaccountBalancesWithTokenAndPrice.push({
            ...balances[i],
            amount: deposit ? deposit.availableBalance : "0",
            token,
            usdPrice: usdPrice,
          });
        }
      } catch (e) {
        console.log(e);
        continue;
      }
    }

    await sleep(2500);
  }

  return subaccountBalancesWithTokenAndPrice as {
    token: Token;
    denom: string;
    amount: string;
    usdPrice: number;
  }[];
};
