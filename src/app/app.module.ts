import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';

import { countryReducer } from "./store/reducers/country.reducers";
import { selectCountryReducer } from "./store/reducers/country.reducers";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CountryDetailComponent } from "./components/country-detail/country-detail.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { DataService } from './services/data-service';
import { SongEffects } from './store/effects/song.effects';
import { HttpClientModule } from '@angular/common/http';
import { CountryListComponent } from './components/country-list/country-list.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CountryDetailComponent,
    SearchBarComponent,
    CountryListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      countryList: countryReducer,
      selectedCountry: selectCountryReducer
    }),
    EffectsModule.forRoot([SongEffects]),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
