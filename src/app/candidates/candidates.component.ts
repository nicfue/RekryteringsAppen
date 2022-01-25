import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { StatusCode } from '../enums/status-codes.enum';
import { Candidate } from '../models/candidate.model';
import { Status } from '../models/status.model';
import { CandidatedApiService } from './candidates.api.service';
import { CandidatesService } from './candidates.service';

@Component({
  selector: 'candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit, OnDestroy {
  readonly searchFormControlName = 'search';
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
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormGroup({
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
    }),
    status: new FormControl('', Validators.required),
  });

  editMode: boolean = false;
  editedItemIndex!: number;
  searchValue!: string;
  searchForm = new FormGroup({
    search: new FormControl('')
  })

  changedSub!: Subscription;
  editingSub!: Subscription;

  get searchFormControl(): any {
    return this.searchForm.get(this.searchFormControlName) as AbstractControl;
  }

  setSearchString(searchString: string): void {
    this.searchValue = searchString;
  }

  initForm(): void {
    if (!this.searchFormControl.value) {
      this.searchValue = '';
    }
    this.editMode = false;
    this.candidatesForm.reset();
  }

  constructor(
    private candidatesService: CandidatesService,
    private candidatesApiService: CandidatedApiService,
  ) { }

  ngOnInit(): void {
    this.changedSub = this.candidatesApiService.candidatesChanged.subscribe(() => {
      this.candidates$ = this.candidatesService.fetchCandidates$();
    })
    this.editingSub = this.candidatesApiService.candidateEdited
      .subscribe((index: number) => this.editMode ? this.editedItemIndex = index : null);
  }

  onSubmit(candidate: Candidate) {
    this.candidatesForm.markAllAsTouched();
    if (!this.candidatesForm.valid) {
      return;
    }

    if (this.editMode) {
      const value = this.candidatesForm.value;
      const newCandidate = new Candidate(value.firstName, value.lastName, value.age, value.email, value.address, value.status);
      this.candidatesService.updateCandidate$(this.editedItemIndex, newCandidate);
    } else {
      this.candidatesService.saveCandidate$(candidate);
    }
    this.editMode = false;
    this.candidatesForm.reset();
  }

  deleteCandidate(candidateId: number) {
    this.candidatesService.deleteCandidate(candidateId);
  }

  editCandidate(candidate: Candidate, index: number) {
    this.editMode = true;
    this.candidatesApiService.candidateEdited.next(index);
    this.candidatesForm.patchValue({
      ...candidate
    })
  }

  ngOnDestroy(): void {
    this.changedSub.unsubscribe();
    this.editingSub.unsubscribe();
  }

}
