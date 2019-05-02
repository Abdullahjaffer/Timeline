import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../Auth/auth.service'
import {Router} from '@angular/router'

// import { NavbarComponent} from './../navbar/navbar.component'

import {newUser} from '../../models/user'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor( private help : AuthService,
     private router : Router 
    //  ,private nav : NavbarComponent
     ) { }

  ngOnInit() {
  }

  flag:boolean = false

  onSubmit(data:any){
    let user = new newUser
    user = {
      name: data.Name,
      email: data.Email,
      password: data.Password
    }
    this.help.signup(user, (res:boolean)=>{
      if(res){
        console.log(res)
        // this.nav.ngOnInit()
        this.router.navigateByUrl('/');
      }else{
        this.router.navigateByUrl('/signup');
      }
    });
    this.flag = true;
  }
}
