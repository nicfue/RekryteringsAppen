import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { CANDIDATES } from "./candidates";
import { CandidateResponse } from "./recruitment/model/candidate.response.model";

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {

  public fetchCandidates$(): Observable<{ data: CandidateResponse[] }> {
    return of({ data: CANDIDATES });
  }
}
