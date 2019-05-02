import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from '../modules/components/login/login.component'
import {SignupComponent} from '../modules/components/signup/signup.component'
import {TimelineComponent} from '../modules/components/timeline/timeline.component'
import { AuthGuard } from './guards/auth.guard'

const routes: Routes = [
  {
    path: 'login',component: LoginComponent
  },
  {
    path: 'signup', component : SignupComponent
  },
  {
    path: '', component : TimelineComponent, canActivate: [AuthGuard]
  },
  { path: '**', component : TimelineComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
