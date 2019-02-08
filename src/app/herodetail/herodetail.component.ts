import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import { HeroService } from '../hero.service';
@Component({
  selector: 'app-herodetail',
  templateUrl: './herodetail.component.html',
  styleUrls: ['./herodetail.component.scss']
})
export class HerodetailComponent implements OnInit {

  public individual_city;
  public error_msg;
  public get_id: number;
  public value: string;

  public city_form_grp = new FormGroup({
    city_id: new FormControl(''),
    city_name: new FormControl('', [Validators.required]),
    state_id: new FormControl(''),
  });

  // city_form_grp = this.fb.group({
  //   city_id: [''],
  //   city_name: ['', Validators.required],
  //   state_id: [''],
  // });

  constructor(private _heroService: HeroService, private route_details: ActivatedRoute, private fb: FormBuilder) { 
    console.log("constructor");
  }

  ngOnInit() {
    console.log("ngOnInit");
    this.route_details.paramMap.subscribe(params => {
      this.get_id = parseInt(params.get("id"));
      this.value = params.get("value");
    });

    let id = parseInt(this.route_details.snapshot.paramMap.get('id'));
    if (id) {
      this._heroService.get_individual_city(id).then(
        (data) => {
          this.individual_city = data;
          this.city_form_grp.patchValue({
            city_id: this.individual_city.city_id,
            city_name: this.individual_city.city_name,
            state_id: this.individual_city.state_id,
          });
        },
        error => this.error_msg = error
      );
    }
  }

  ngOnChanges() {
    console.log("ngOnChanges");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck")
  }

  ngOnDestroy() {
    console.log("ngOnDestroy")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }

  onSubmit() {
    console.log(this.city_form_grp.value);
    this._heroService.save_ind_city(this.city_form_grp.value).subscribe(data => this.individual_city = data, error => this.error_msg = error);
  }

  savecity(value) {
    console.log(value)
  }

  getControlLabel(type: string) {
    return this.city_form_grp.controls[type].value;
  }

}
