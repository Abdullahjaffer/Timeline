import { Component, OnInit, OnChanges } from '@angular/core';
import {AuthService} from './../../Auth/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit , OnChanges {

  constructor(private help: AuthService, 
    private router: Router) { }
  name:String = ''
  ngOnInit() {
   this.help.verifyUser((res:any)=>{
     if(res.Status == 'true'){
     }else{
       this.help.deleteToken()
     }
   })
   this.help.currentUser.subscribe(res=>{
    if(res != null){
      // console.log(res)
      this.name = res.User.name
    }
    else{
      // console.log(res)
      this.name = res
    }
      })
  }
  ngOnChanges(){
  }

  onLogOut(){
    this.help.deleteToken()
    this.router.navigate(['/login']);
  }
}