import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'country-detail', component: CountryDetailComponent },
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
