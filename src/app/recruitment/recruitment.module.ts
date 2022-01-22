import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { RecruitmentComponent } from "./recruitment.component";
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [RecruitmentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: RecruitmentComponent }]),
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class RecruitmentModule { }
