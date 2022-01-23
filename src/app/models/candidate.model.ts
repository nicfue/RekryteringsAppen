
import { StatusCode } from "../enums/status-codes.enum";
import { Address } from "./address.model";
import { CandidateResponse } from "./candidate.response.model";

export interface Candidate {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  address: Address;
  status: StatusCode;
}

export function mapToCandidate(data: CandidateResponse): Candidate {
  const { firstName, lastName, age, email, address, status } = data;

  return {
    firstName,
    lastName,
    age,
    email,
    address,
    status: status as StatusCode,
  };
}
