export enum Action {
  convert = "convert",
  query = "query",
}

export enum AddressConverter {
  InjToEth = "InjToEth",
  EthToInj = "EthToInj",
  InjToSubaccount = "InjToSubaccount",
  EthToSubaccount = "EthToSubaccount",
  SubaccountToInj = "SubaccountToInj",
  SubaccountToEth = "SubaccountToEth",
  SeedPhaseToAddress = "SeedPhaseToAddress",
  PublicKeyToAddress = "PublicKeyToAddress",
  PrivateKeyToAddress = "PrivateKeyToAddress",
  PrivateKeyToPublicKey = "PrivateKeyToPublicKey",
}

export enum Query {
  Portfolio = "Portfolio",
  BankBalances = "BankBalances",
}
