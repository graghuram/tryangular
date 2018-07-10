import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HerolistComponent } from './herolist/herolist.component';
import { HerodetailComponent } from './herodetail/herodetail.component';
import { MypagenotfoundComponent } from './mypagenotfound/mypagenotfound.component';

const routes: Routes = [
    {path:"", redirectTo: '/dashboard', pathMatch: 'full'}, 
    {path:"dashboard", component:DashboardComponent}, 
    {path:"herolist", component:HerolistComponent}, 
    {path:"herodetail/:id", component:HerodetailComponent}, 
    {path:"**", component:MypagenotfoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const my_cust_routing_component = [DashboardComponent, HerodetailComponent, HerolistComponent, MypagenotfoundComponent]
