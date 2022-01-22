import { CandidateResponse } from "./candidate.response.model";
import { Status } from "./status.model";

export interface Candidate {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  address: string;
  status: string;
}

export function mapToCandidate(data: CandidateResponse): Candidate {
  const { id, firstName, lastName, age, email, address, status } = data;

  return {
    id,
    firstName,
    lastName,
    age,
    email,
    address,
    status: Status[status] as string,
  };
}
