import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatListModule } from '@angular/material/list';
import { RouterModule } from "@angular/router";
import { CandidatesComponent } from "./candidates.component";
import { CandidatesService } from "./candidates.service";
import { CandidatesFormComponent } from "./components/candidates-form/candidates-form.component";
import { CandidatesFilterPipe } from "./pipes/candidates-filter.pipe";

@NgModule({
  declarations: [
    CandidatesComponent,
    CandidatesFormComponent,
    CandidatesFilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CandidatesComponent }]),
    MatListModule,
    ReactiveFormsModule
  ],
  providers: [CandidatesService],
  exports: [CandidatesComponent]
})
export class CandidatesModule { }
