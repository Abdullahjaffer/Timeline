import { Component, OnInit, Input } from '@angular/core';
import {Timeline} from '../../models/Timeline'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  
  @Input() post : any;
  
  bucker:string
  buck: boolean

  date: string
  time: string
  constructor() {
    this.bucker =  localStorage.getItem("buck")
    if(this.bucker === "false"){
      this.buck = false
      localStorage.setItem("buck","true")
    }
    if(this.bucker === "true"){
      this.buck = true
      localStorage.setItem("buck","false")
    }
    
  }

  ngOnInit() {
  }
  getDate(){
    return this.post.updatedAt.slice(0,10)
  }
  getTime(){
    return this.post.updatedAt.slice(11,19)
  }

}
