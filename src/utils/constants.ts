import { getNetworkEndpoints, Network } from "@injectivelabs/networks";
import { TokenStatic, TokenFactoryStatic } from "@injectivelabs/sdk-ts";
import tokens from "../data/tokens.json"; // json file downloaded from step 1

export const tokenFactoryStatic = new TokenFactoryStatic(
  tokens as TokenStatic[]
);

export const NETWORK = Network.MainnetSentry;
export const ENDPOINTS = getNetworkEndpoints(NETWORK);

export const ASSET_PRICE_SERVICE_URL =
  "https://k8s.mainnet.asset.injective.network/asset-price/v1";
