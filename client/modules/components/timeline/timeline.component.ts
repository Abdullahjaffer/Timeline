import { Component, OnInit } from '@angular/core';

import { AlertService } from './../../services/alert.service'
import {TimelineService } from '../../services/timeline.service'

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  posts:any;
  pagenumber: number;
  flag:boolean;
  buck: string;
  constructor(private timelineService: TimelineService,
  private alert: AlertService) {
    
  }
ngOnInit() {
  this.posts
  this.flag= false
  this.buck="false"
  this.pagenumber = 1
    localStorage.setItem("buck",this.buck)
     this.timelineService.fetchPosts(this.pagenumber).subscribe(
      (res:any)=>{
        if(Object.keys(res).length === 0 && res.Status != 'false' )
        this.alert.error("Empty")
        this.posts = res
        this.flag = true
           },
      err=>{
            this.alert.error("ERROR IN CONECTIVITY")
            return false   
          }
    )
  }

  onScroll(){
    this.flag = false
    this.pagenumber +=1
    console.log(this.pagenumber)
    this.timelineService.fetchPosts(this.pagenumber).subscribe(
      res=>{
        console.log("in response")
        if(Object.keys(res).length === 0)
        this.flag = true
        this.posts = this.posts.concat(res)
           },
      err=>{
            this.alert.error("ERROR IN CONECTIVITY")
            return false   
          }
    )
  }
}
