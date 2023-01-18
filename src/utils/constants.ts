import { getNetworkEndpoints, Network } from "@injectivelabs/networks";
import { DenomClient } from "@injectivelabs/sdk-ts";

import tokenUtils from "@injectivelabs/token-utils";
const { CoinGeckoApi, InjectiveAssetService } = tokenUtils;

export const NETWORK = Network.MainnetK8s;
export const ENDPOINTS = getNetworkEndpoints(NETWORK);

export const denomClient = new DenomClient(NETWORK);

export const ASSET_PRICE_SERVICE_URL =
  "https://k8s.mainnet.asset.injective.network/asset-price/v1";
export const assetService = new InjectiveAssetService(ASSET_PRICE_SERVICE_URL);
export const coinGeckoService = new CoinGeckoApi({
  baseUrl: "https://api.coingecko.com/api/v3",
  apiKey: "",
});
