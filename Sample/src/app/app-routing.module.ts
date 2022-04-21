import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component:LandingPageComponent
  },
  {
    path:'dashboard',
    component:DashBoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
