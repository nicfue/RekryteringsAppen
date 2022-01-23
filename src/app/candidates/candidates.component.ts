import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StatusCode } from '../enums/status-codes.enum';
import { Candidate } from '../models/candidate.model';
import { Status } from '../models/status.model';
import { CandidatedApiService } from './candidates.api.service';
import { CandidatesService } from './candidates.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {
  candidates$ = this.candidatesService.fetchCandidates$();
  status: Status[] = [
    { value: StatusCode.KONTAKT, viewValue: 'Kontakt' },
    { value: StatusCode.DIALOG, viewValue: 'Dialog' },
    { value: StatusCode.INTERVJU, viewValue: 'Intervju' },
    { value: StatusCode.ERBJUDANDE, viewValue: 'Erbjudande' },
    { value: StatusCode.AVSLUTAD, viewValue: 'Avslutad' }
  ]

  candidatesForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    address: new FormGroup({
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
    }),
    status: new FormControl('', Validators.required),
  });

  constructor(
    private candidatesService: CandidatesService,
    private candidatesApiService: CandidatedApiService
  ) { }

  ngOnInit(): void {
  }

  onCandidateSaved(candidate: Candidate) {
    console.log(candidate);
    console.log(this.candidatesForm);

    this.candidatesApiService.saveCandidate$(candidate);
  }

}
