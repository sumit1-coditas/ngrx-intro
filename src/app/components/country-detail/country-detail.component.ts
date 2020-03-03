import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { SelectedCountryState } from '../../store/state/country.state';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit,OnDestroy {

  // test: Observable<any>;

  selectedCountry: any;
  private storeSubscription: Subscription;

  constructor(private store: Store<SelectedCountryState>) { }

  ngOnInit(): void {
    // this.test = this.store.select('selectedCountry');
    // console.log(this.test);

    this.storeSubscription = this.store.select('selectedCountry').subscribe(data => {
      this.selectedCountry = data;
      console.log(data);
      
    });
  }

  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
  }

}
