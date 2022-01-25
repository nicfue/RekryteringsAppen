import { Injectable } from "@angular/core";
import { Observable, of, Subject } from "rxjs";
import { CANDIDATES } from "../candidates";
import { Candidate } from "../models/candidate.model";
import { CandidateResponse } from "../models/candidate.response.model";


@Injectable({
  providedIn: 'root'
})
export class CandidatedApiService {
  candidatesChanged = new Subject<CandidateResponse[]>();
  candidateEdited = new Subject<number>();

  public fetchCandidates$(): Observable<{ data: CandidateResponse[] }> {
    return of({ data: CANDIDATES });
  }

  public saveCandidate$(candidate: Candidate): Observable<Candidate> {
    CANDIDATES.unshift(candidate);
    this.candidatesChanged.next(CANDIDATES.slice());
    return of(candidate);
  }

  updateCandidate$(index: number, newCandidate: Candidate): Observable<Candidate> {
    CANDIDATES[index] = newCandidate;
    this.candidatesChanged.next(CANDIDATES.slice());
    return of(newCandidate);
  }

  deleteCandidate(index: number) {
    CANDIDATES.splice(index, 1);
    this.candidatesChanged.next(CANDIDATES.slice());
  }
}
