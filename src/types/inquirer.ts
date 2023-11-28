import { Action, AddressConverter, Query } from "./enums.js";

export interface Answer {
  action?: Action;
  address?: string;
  convert?: AddressConverter;
  query?: Query;
}
