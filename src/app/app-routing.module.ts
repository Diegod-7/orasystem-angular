import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IsoCertificationComponent } from './components/iso-certification/iso-certification.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'iso-certification', component: IsoCertificationComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
