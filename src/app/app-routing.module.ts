import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HerolistComponent } from './herolist/herolist.component';
import { HerodetailComponent } from './herodetail/herodetail.component';
import { MypagenotfoundComponent } from './mypagenotfound/mypagenotfound.component';
import { TempaddComponent } from './tempadd/tempadd.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
    {path:"", redirectTo: '/dashboard', pathMatch: 'full'}, 
    {path:"dashboard", component:DashboardComponent}, 
    {path:"herolist", component:HerolistComponent, canActivate:[AuthGuard]}, 
    {path:"herodetail/:id/:value", component:HerodetailComponent, canActivate:[AuthGuard]},
    {path:"herodetail/:id", component:HerodetailComponent, canActivate:[AuthGuard]},
    {path:"herodetail", component:HerodetailComponent, canActivate:[AuthGuard]}, 
    {path:"tempadd", component:TempaddComponent, canActivate:[AuthGuard]}, 
    {path:"reactiveForm", component:ReactiveformComponent, canActivate:[AuthGuard]},
    {path:"**", component:MypagenotfoundComponent, canActivate:[AuthGuard]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const my_cust_routing_component = [DashboardComponent, HerodetailComponent, HerolistComponent, MypagenotfoundComponent, TempaddComponent, ReactiveformComponent]
