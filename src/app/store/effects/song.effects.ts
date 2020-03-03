import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { DataService } from 'src/app/services/data-service';

import {ECountryActions, SearchCountrySuccess, CountryActions} from '../actions/country.actions';


@Injectable()
export class SongEffects {

  loadSongs$ = createEffect(() => this.actions$.pipe(
    ofType(ECountryActions.SearchCountry),
    mergeMap((action) => this.dataService.searchCountry(action.payload)
      .pipe(
        map(country => (new SearchCountrySuccess(country))),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions<CountryActions>,
    private dataService: DataService
  ) {}
}
