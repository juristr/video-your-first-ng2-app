import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class PeopleService {

  constructor(private http: Http) { }

  fetchPeople() {
    return this.http
      .get('/assets/people.json')
      .map(res => res.json());
  }

}
