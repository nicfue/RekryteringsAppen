import { StatusCode } from "../enums/status-codes.enum";
import { Address } from "./address.model";

export interface CandidateResponse {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  address: Address;
  status: string;
}

