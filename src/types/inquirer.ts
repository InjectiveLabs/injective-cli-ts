import { Action, AddressConverter, Calculator, Query } from "./enums.js";

export interface Answer {
  action?: Action;
  address?: string;
  convert?: AddressConverter;
  calculator?: Calculator;
  query?: Query;
}
