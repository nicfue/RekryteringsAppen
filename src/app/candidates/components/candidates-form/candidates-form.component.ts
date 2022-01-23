import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Candidate } from '../../../models/candidate.model';
import { Status } from '../../../models/status.model';

@Component({
  selector: 'candidates-form',
  templateUrl: './candidates-form.component.html',
  styleUrls: ['./candidates-form.component.scss']
})
export class CandidatesFormComponent implements OnInit {
  @Input() candidatesForm: any;
  @Input() status!: Status[];
  @Output() candidateSaved = new EventEmitter<Candidate>();

  ngOnInit(): void { }

  onSubmit() {
    this.candidateSaved.emit(this.candidatesForm.value);
  }

}
