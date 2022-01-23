import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: 'rekrytering',
    loadChildren: () => import('./candidates/candidates.module').then(m => m.CandidatesModule)
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
