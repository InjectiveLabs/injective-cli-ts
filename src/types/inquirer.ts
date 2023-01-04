import { Action, AddressConverter } from "./enums.js";

export interface Answer {
  action?: Action;
  address?: string;
  convert?: AddressConverter;
}
