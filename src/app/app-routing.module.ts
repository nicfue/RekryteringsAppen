import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: 'rekrytering',
    loadChildren: () => import('./rekrytering/rekrytering.module').then(m => m.RekryteringModule)
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
