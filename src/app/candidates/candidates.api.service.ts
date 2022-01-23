import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { CANDIDATES } from "../candidates";
import { Candidate } from "../models/candidate.model";
import { CandidateResponse } from "../models/candidate.response.model";


@Injectable({
  providedIn: 'root'
})
export class CandidatedApiService {

  public fetchCandidates$(): Observable<CandidateResponse[]> {
    return of(CANDIDATES);
  }

  public saveCandidate$(candidate: Candidate): Observable<Candidate> {
    CANDIDATES.push(candidate)
    return of(candidate);
  }
}
