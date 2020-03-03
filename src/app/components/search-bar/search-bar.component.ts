import { Component, OnInit } from '@angular/core';
import { SearchCountry, ClearSearchedList, ClearSelectedCountry } from 'src/app/store/actions/country.actions';
import { CountryState } from './../../store/state/country.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private store: Store<CountryState>) { }

  ngOnInit(): void {
  }

  onKeyupSearch(e: any) {
    if (!(e.target.value === '')) {
      this.store.dispatch(new SearchCountry(e.target.value));
    } else {
      this.store.dispatch(new ClearSearchedList());
      this.store.dispatch(new ClearSelectedCountry());
    }
  }

}
