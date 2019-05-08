import { Component, OnInit , Input} from '@angular/core';
import { TimelineService} from './../../../services/timeline.service'
import {AlertService} from './../../../services/alert.service'
import {TimelineComponent} from './../../timeline/timeline.component'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @Input() post : string;
  @Input() postid : string;
  @Input() title : string;
  
  flag:boolean = false
  constructor( private timeline: TimelineService,
private alert: AlertService,
private timelinec : TimelineComponent    ) { }

  ngOnInit() {
    // console.log(this.post)
    // console.log(this.title)
    // console.log(this.postid)
  }

  Edit(){
    this.flag = true
  }
  Close(){
    this.flag = false
  }
  onSubmit(data:any){
    data = {
      post : data.value.Post,
      title: data.value.Title
    }

    this.timeline.edit(this.postid, data).subscribe((res:any)=>{
      if(res.Status == 'false'){
        this.alert.error(res.Reason)
        this.flag = false
      }
      else{
        this.alert.success('Post edited')
        this.flag = false
        this.timelinec.ngOnInit()
      }
    })


  }

}
