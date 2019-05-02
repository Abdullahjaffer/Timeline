import { Component, OnInit , Input } from '@angular/core';
import { TimelineService } from './../../../services/timeline.service'
import { AlertService} from './../../../services/alert.service'
import { TimelineComponent } from './../../timeline/timeline.component'
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  @Input() postid : string;
  constructor(private help: TimelineService,
     private alert: AlertService,
     private timeline : TimelineComponent ) { }

  ngOnInit() {
  }

  Delete(){
    if(window.confirm("Are you Sure?"))
    this.help.delete(this.postid).subscribe((res:any)=>{
      console.log(res)
      if(res.nModified>0){
        this.alert.success("Post Deleted")
        this.timeline.ngOnInit()
      }
    },(err)=>{
      this.alert.error(err)
    })
  }

}
