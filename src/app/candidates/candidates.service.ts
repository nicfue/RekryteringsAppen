import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { mapToCandidate } from "../models/candidate.model";
import { CandidatedApiService } from "./candidates.api.service";

@Injectable()
export class CandidatesService {
  constructor(private candidatesApiService: CandidatedApiService) { }

   fetchCandidates$() {
    return this.candidatesApiService.fetchCandidates$().pipe(
      map(candidate => candidate)
    );
  }
}
