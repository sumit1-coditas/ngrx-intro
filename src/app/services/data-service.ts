
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  searchCountry(name: string) {
    return this.http.get(`https://restcountries.eu/rest/v2/name/${name}`);
  }
}
