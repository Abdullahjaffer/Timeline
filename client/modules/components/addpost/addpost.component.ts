import { Component, OnInit } from '@angular/core';
import { TimelineService} from './../../services/timeline.service'
import {TimelineComponent} from './../timeline/timeline.component'
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.scss']
})
export class AddpostComponent implements OnInit {

  constructor(private help: TimelineService,
     private timeline : TimelineComponent) { }

  ngOnInit() {
  }

  onSubmit(data:any){
    data = {
      post : data.value.Post,
      title: data.value.Title
    }
    this.help.post(data,(res:any)=>{
      if(res){
        console.log(res)
        this.timeline.ngOnInit()
        return true
      }
      return false
    })


  }
}