import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Candidate } from '../../../models/candidate.model';
import { Status } from '../../../models/status.model';

@Component({
  selector: 'candidates-form',
  templateUrl: './candidates-form.component.html',
  styleUrls: ['./candidates-form.component.scss']
})
export class CandidatesFormComponent {
  @Input() candidatesForm!: FormGroup;
  @Input() searchForm!: FormGroup
  @Input() status: Status[] = [];
  @Input() editMode = false;
  @Output() onSaved = new EventEmitter<Candidate>();
  @Output() onSearch = new EventEmitter<string>();
  @Output() onReset = new EventEmitter<void>();

  onSubmit() {
    this.onSaved.emit(this.candidatesForm.value);
  }

  setSearchString() {
    this.onSearch.emit(this.searchForm.value.search);
  }

  resetForm(): void {
    this.onReset.emit();
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

}
