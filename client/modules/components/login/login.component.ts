import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user'
import {AuthService} from '../../Auth/auth.service'
import {Router}  from '@angular/router'
// import { NavbarComponent } from './../navbar/navbar.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(private help: AuthService, 
    private router:Router 
    // private navbar: NavbarComponent
    ) {}

  ngOnInit() {
    //this.help.deleteToken()
  }


  onSubmit(data:any){
    let user = new User
    user = {
      email: data.Email,
      password: data.Password
    }
    this.help.loginUser(user, (res: boolean)=>{
      if(res){
        // this.navbar.ngOnInit()
        this.router.navigateByUrl('/');
      }
    });

  }
}
