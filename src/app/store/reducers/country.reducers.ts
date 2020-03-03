import { ECountryActions } from "../actions/country.actions";
import { CountryActions } from "../actions/country.actions";

export function countryReducer(state = {}, action: CountryActions) {
    
    switch (action.type) {
        case ECountryActions.SearchCountry: {
            return { ...state, searchTerm: action.payload };
        }
        case ECountryActions.SearchCountrySuccess: {
            return { ...state, countryList: action.payload };
        }
        case ECountryActions.ClearSearchedList: {
            return {};
        }
        default:
            return state;
    }
}

export function selectCountryReducer(state = {}, action: CountryActions) {

    switch (action.type) {
        case ECountryActions.SelectCountry:
            return { ...action.payload };
        case ECountryActions.GetSelectedCountry:
            return { ...state };
        case ECountryActions.ClearSelectedCountry:
            return {}
        default:
            return state;
    }
}
