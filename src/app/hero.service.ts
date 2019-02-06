import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../environments/environment';
@Injectable()
export class HeroService {

  private api_base_url = environment.api_url;

  constructor(private http_c: HttpClient) { }

  getHeroList() {
    return this.http_c.get(this.api_base_url + '/viewlist.php').catch(this.show_error_msg);
  }

  get_individual_city(id): Promise<any> {
    return this.http_c.post(this.api_base_url + '/editcity.php', id).toPromise().catch(this.show_error_msg);
  }

  save_ind_city(datas) {
    let httpparam= new HttpParams()
    .set('city_id', datas.city_id)
    .set('city_name', datas.city_name)
    .set('state_id', datas.state_id);
    return this.http_c.post(this.api_base_url + "/save_city.php", httpparam).catch(this.show_error_msg);
  }

  show_error_msg(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }

}
