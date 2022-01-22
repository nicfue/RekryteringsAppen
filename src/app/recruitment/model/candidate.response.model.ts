import { Status } from "./status.model";

export interface CandidateResponse {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  address: string;
  status: Status;
}

