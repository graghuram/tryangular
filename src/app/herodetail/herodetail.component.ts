import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-herodetail',
  templateUrl: './herodetail.component.html',
  styleUrls: ['./herodetail.component.scss']
})
export class HerodetailComponent implements OnInit {

  constructor(private route_details: ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route_details.snapshot.paramMap.get('id'));
  }

}
