import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public hero_lists = [];
  public error_msg;

  constructor(private _heroService : HeroService, private new_router: Router) { 
    
  }

  ngOnInit() {
    this._heroService.getHeroList().subscribe(data => this.hero_lists = data, error => this.error_msg = error);
  }

  get_ind_value (values) {
    this.new_router.navigate(['/herodetail', values.id]);
  }

}
