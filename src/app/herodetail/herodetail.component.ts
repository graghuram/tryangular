import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';

import { HeroService } from '../hero.service';
@Component({
  selector: 'app-herodetail',
  templateUrl: './herodetail.component.html',
  styleUrls: ['./herodetail.component.scss']
})
export class HerodetailComponent implements OnInit {

  public individual_city;
  public error_msg;

  constructor(private _heroService : HeroService, private route_details: ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route_details.snapshot.paramMap.get('id'));
    // alert(id);
    this._heroService.get_individual_city(id).subscribe(data => this.individual_city = data, error => this.error_msg = error);
  }

}
