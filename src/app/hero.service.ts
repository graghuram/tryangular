import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { HeroStru } from '../assets/data/HeroStru'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HeroService {

  // private _get_url: string = "/assets/data/allheros.json";
  private _get_url: string = "http://localhost/workspace/angular/try1/src/assets/php/viewlist.php";

  constructor(private http_c: HttpClient) { }

  // getUsers() {
  //   return this.http_c.get("http://angularjs-angularcrud.7e14.starter-us-west-2.openshiftapps.com/api/getAll.php").map(data => data.json());
  // }

  getHeroList(): Observable<HeroStru[]> {
    return this.http_c.get(this._get_url).catch(this.show_error_msg);
  }

  show_error_msg( error : HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }

}
