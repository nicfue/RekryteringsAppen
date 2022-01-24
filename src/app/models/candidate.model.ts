import { StatusCode } from "../enums/status-codes.enum";
import { Address } from "./address.model";
import { CandidateResponse } from "./candidate.response.model";

export class Candidate {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public email: string,
    public address: Address,
    public status: StatusCode
  ) { }
}

export function mapResponseToCandidate(data: CandidateResponse): Candidate {
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
