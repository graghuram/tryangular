import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

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
  
  // city_form_grp = new FormGroup({
  //   // city_id: new FormControl(''),
  //   city_name: new FormControl({ 
  //     value: 'n/a',
  //     // validators: Validators.required,
  //   }),
  //   // state_id: new FormControl(''),
  // });

  city_form_grp = this.fb.group({
    city_name: ['', Validators.required],
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  get aliases() {
    return this.city_form_grp.get('aliases') as FormArray;
  }


  constructor(private _heroService : HeroService, private route_details: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    let id = parseInt(this.route_details.snapshot.paramMap.get('id'));
    // alert(id);
    this._heroService.get_individual_city(id).subscribe(
        (data) => {
          this.individual_city = data;
          this.city_form_grp.patchValue({
            city_name: this.individual_city.city_name,
          });
        }  , 
        error => this.error_msg = error
      );
   
        // console.log(this.city_form_grp.value);
    // this.city_name.patc
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log("R");
    console.warn(this.city_form_grp.value);
    console.log("R--");
  }

  savecity(value) {
    console.log(value)
  }

}
