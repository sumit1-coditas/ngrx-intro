import { Action } from '@ngrx/store';


export enum ECountryActions {
    SearchCountry = '[Search Page] Search Country',
    SearchCountrySuccess = '[Search Page] Search Country Success',
    ClearSearchedList = '[Search Page] Clear Searched Country List',
    ClearSelectedCountry = '[Search Page] Clear Selected Country',

    GetCountryList = '[Country List Page] Get Country List',
    SelectCountry = '[Country List Page] Select Country',
    GetSelectedCountry = '[Country Info Page] Get Selected Country Info'

}

export class SearchCountry implements Action {
    public readonly type = ECountryActions.SearchCountry;
    constructor(public payload: string) { }
}

export class SearchCountrySuccess implements Action {
    public readonly type = ECountryActions.SearchCountrySuccess;
    constructor(public payload) { }
}

export class ClearSearchedList implements Action {
    public readonly type = ECountryActions.ClearSearchedList;
}

export class ClearSelectedCountry implements Action {
    public readonly type = ECountryActions.ClearSelectedCountry;
}

export class GetCountryList implements Action {
    public readonly type = ECountryActions.GetCountryList;
}

export class SelectCountry implements Action {
    public readonly type = ECountryActions.SelectCountry;
    constructor(public payload) { }
}

export class GetSelectedCountry implements Action {
    public readonly type = ECountryActions.GetSelectedCountry;
}


// tslint:disable-next-line: max-line-length
export type CountryActions = SearchCountry | SearchCountrySuccess | ClearSearchedList | ClearSelectedCountry | GetCountryList | SelectCountry | GetSelectedCountry;
