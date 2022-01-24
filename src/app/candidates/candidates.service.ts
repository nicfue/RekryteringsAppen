import { Injectable } from "@angular/core";
import { map, Observable, Subject } from "rxjs";
import { Candidate, mapResponseToCandidate } from "../models/candidate.model";
import { CandidatedApiService } from "./candidates.api.service";

@Injectable()
export class CandidatesService {
  startedEditing = new Subject<number>();

  constructor(private candidatesApiService: CandidatedApiService) { }

  fetchCandidates$(): Observable<Candidate[]> {
    return this.candidatesApiService.fetchCandidates$().pipe(
      map(({ data }) => data.map(candidates => mapResponseToCandidate(candidates)))
    );
  }

  saveCandidate$(candidate: Candidate): Observable<Candidate> {
   return this.candidatesApiService.saveCandidate$(candidate);
  }

  updateCandidate$(index: number, newCandidate: Candidate): Observable<Candidate> {
   return this.candidatesApiService.updateCandidate$(index, newCandidate);
  }

  deleteCandidate(index: number) {
    this.candidatesApiService.deleteCandidate(index);
  }
}
