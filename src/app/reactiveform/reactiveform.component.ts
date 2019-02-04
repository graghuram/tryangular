import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {
  userdetails:FormGroup;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.userdetails = new FormGroup({
      title: new FormControl('',Validators.required),
      image: new FormControl('')
    });
  }

  submit():void{
    alert();
  }

  fileselect(event){
    console.log(event.target.files[0]);
    let formData=new FormData();
    formData.append('profile', event.target.files[0]);
    this.http.post(
      'http://localhost/tryangular/src/assets/php/uploadimage.php',
      formData,

    ).subscribe(
      (res)=>{
        console.log(res);
      }
      );
  }

}
