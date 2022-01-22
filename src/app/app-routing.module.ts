import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: 'rekrytering',
    loadChildren: () => import('./recruitment/recruitment.module').then(m => m.RecruitmentModule)
  },
  {
    path: '',
    redirectTo: '/rekrytering',
    pathMatch: 'full'
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
