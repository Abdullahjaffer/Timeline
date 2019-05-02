import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule} from '@angular/forms'
import {HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http'
import {InfiniteScrollModule} from 'ngx-infinite-scroll'
import {MatProgressSpinnerModule} from '@angular/material'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './welcome/app.component';


import { NavbarComponent } from './components/navbar/navbar.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { LoginComponent } from './components/login/login.component';
import { PostComponent } from './components/post/post.component';
import { SignupComponent } from './components/signup/signup.component';

import { AuthService} from '../modules/Auth/auth.service'
import { TokenInterceptor} from '../modules/Auth/token.interceptor';
import { AddpostComponent } from './components/addpost/addpost.component';
import { AlertComponent } from './components/alert/alert.component';
import { EditComponent } from './components/post/edit/edit.component';
import { DeleteComponent } from './components/post/delete/delete.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TimelineComponent,
    LoginComponent,
    PostComponent,
    SignupComponent,
    AddpostComponent,
    AlertComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InfiniteScrollModule,
    MatProgressSpinnerModule
  ],
  providers: [
    AuthService,{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
