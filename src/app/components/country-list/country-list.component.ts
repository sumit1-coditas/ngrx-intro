import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Subscription } from "rxjs";
import { CountryState } from './../../store/state/country.state';
import { SelectCountry } from 'src/app/store/actions/country.actions';


@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit, OnDestroy {

  countries: any;
  private storeSubscription: Subscription;

  constructor(private store: Store<CountryState>, private router: Router) {
  }

  ngOnInit(): void {
    this.storeSubscription = this.store.select('countryList').subscribe(data => {
      this.countries = data;
    });
  }

  onSelectCounty(country) {
    this.store.dispatch(new SelectCountry(country));
    this.router.navigate(['/country-detail']);
  }

  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
  }

}
