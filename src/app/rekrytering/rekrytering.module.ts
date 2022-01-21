import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { RekryteringComponent } from "./rekrytering.component";
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [RekryteringComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: RekryteringComponent}]),
    MatListModule
  ]
})
export class RekryteringModule {}
