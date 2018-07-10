import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { HeroStru } from '../assets/data/HeroStru'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HeroService {

  private _get_url: string = "/assets/data/allheros.json"

  constructor(private http_c: HttpClient) { }

  getHeroList(): Observable<HeroStru[]> {
    return this.http_c.get<HeroStru[]>(this._get_url).catch(this.show_error_msg);
    // return [
    //   {'id': 1, "name" : "Batman", "score" : 10},
    //   {'id': 2, "name" : "IronMan", "score" : 10},
    //   {'id': 3, "name" : "Cap America", "score" : 9},
    //   {'id': 4, "name" : "Ant", "score" : 8},
    //   {'id': 5, "name" : "Thor", "score" : 8},
    //   {'id': 6, "name" : "Loki", "score" : 9},
    //   {'id': 7, "name" : "Hulk", "score" : 7},
    //   {'id': 8, "name" : "SHEILD", "score" : 6},
    //   {'id': 9, "name" : "Spider Man", "score" : 3},
    //   {'id': 10, "name" : "Wolvorine", "score" : 5},
    //   {'id': 11, "name" : "DeadPool", "score" : 4},
    //   {'id': 12, "name" : "Speed", "score" : 3},
    //   {'id': 13, "name" : "Green", "score" : 2},
    // ];
  }

  show_error_msg( error : HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }

}
