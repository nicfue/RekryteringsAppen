import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CandidatesService } from '../candidate.service';
import { Candidate, mapToCandidate } from './model/candidate.model';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.scss']
})
export class RecruitmentComponent implements OnInit {
  candidates$: Observable<Candidate[]> = this.candidateService.fetchCandidates$().pipe(
    map(({ data }) => data.map(candidate => mapToCandidate(candidate)))
  );

  constructor(private candidateService: CandidatesService) { }

  ngOnInit(): void {
  }

}
