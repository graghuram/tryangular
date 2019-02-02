import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule, my_cust_routing_component } from './app-routing.module';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { HeroService } from './hero.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Pipe({
  name : 'addnum'
})

export class AddnumPipe {
  transform(value1: string, value2: string) {
    return value1 + value2;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    my_cust_routing_component,
    AddnumPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [HeroService],
  bootstrap: [AppComponent],
  exports: [BsDropdownModule, TooltipModule, ModalModule]
})
export class AppModule { }
