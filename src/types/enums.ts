export enum Action {
  convert = "convert",
  query = "query",
  calculator = "calculator",
}

export enum AddressConverter {
  InjToEth = "InjToEth",
  EthToInj = "EthToInj",
  InjToSubaccount = "InjToSubaccount",
  EthToSubaccount = "EthToSubaccount",
  SubaccountToInj = "SubaccountToInj",
  SubaccountToEth = "SubaccountToEth",
}

export enum Query {
  PortfolioAndBankValue = "PortfolioAndBankValue",
  BankValue = "BankValue",
  PortfolioValue = "PortfolioValue",
}

export enum Calculator {
  PortfolioAndBankValue = "PortfolioAndBankValue",
  BankValue = "BankValue",
  PortfolioValue = "PortfolioValue",
}
