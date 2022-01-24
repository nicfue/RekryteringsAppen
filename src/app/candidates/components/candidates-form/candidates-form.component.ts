import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Candidate } from '../../../models/candidate.model';
import { Status } from '../../../models/status.model';

@Component({
  selector: 'candidates-form',
  templateUrl: './candidates-form.component.html',
  styleUrls: ['./candidates-form.component.scss']
})
export class CandidatesFormComponent implements OnInit {
  @Input() candidatesForm!: FormGroup;
  @Input() searchForm!: FormGroup
  @Input() status: Status[] = [];
  @Input() editMode = false;
  @Output() candidateSaved = new EventEmitter<Candidate>();
  @Output() searchEmitted = new EventEmitter<string>();
  @Output() initFormEmitted = new EventEmitter<unknown>();

  ngOnInit(): void { }

  onSubmit() {
    this.candidateSaved.emit(this.candidatesForm.value);
  }

  validateControl(controlName: string, nestedControlName?: string): boolean {
    return nestedControlName
      ?
      (<FormGroup>this.candidatesForm.controls[nestedControlName]).controls[controlName].invalid &&
      ((<FormGroup>this.candidatesForm.controls[nestedControlName]).controls[controlName].dirty ||
        (<FormGroup>this.candidatesForm.controls[nestedControlName]).controls[controlName].touched)
      : (<FormGroup>this.candidatesForm.controls[controlName]).invalid &&
      ((<FormGroup>this.candidatesForm.controls[controlName])?.dirty ||
        (<FormGroup>this.candidatesForm.controls[controlName])?.touched)
  }

  setSearchString() {
    this.searchEmitted.emit(this.searchForm.value.search);
  }

  initForm(): void {
    this.initFormEmitted.emit();
  }
}
