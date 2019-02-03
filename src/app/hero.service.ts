import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HeroService {

  private api_base_url = "http://localhost/workspace/angular/try1/src/assets/php";

  constructor(private http_c: HttpClient) { }

  getHeroList() {
    return this.http_c.get(this.api_base_url + '/viewlist.php').catch(this.show_error_msg);
  }

  get_individual_city(id) : Promise <any> {
    return this.http_c.post(this.api_base_url + '/editcity.php', id).toPromise().catch(this.show_error_msg);
  }

  show_error_msg( error : HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }

}
