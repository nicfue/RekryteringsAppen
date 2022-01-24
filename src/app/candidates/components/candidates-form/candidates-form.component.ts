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
  @Input() status: Status[] = [];
  @Input() editMode = false;
  @Output() candidateSaved = new EventEmitter<Candidate>();

  ngOnInit(): void { }

  onSubmit() {
    this.candidateSaved.emit(this.candidatesForm.value);
  }

}
