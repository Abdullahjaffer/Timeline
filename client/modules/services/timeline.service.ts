import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AlertService} from '../services/alert.service'

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  url:string = "/api/v1"
  constructor( private http : HttpClient, private alert: AlertService) { }

  fetchPosts(x:number){
    return this.http.get(`${this.url}/timeline/view/${x}`)
    // .subscribe(
    //   res =>{
    //     cb(res)
    //   },
    //   err=>{
    //     this.alert.error("ERROR IN CONECTIVITY")
    //     return false   
    //   }
    // )
  }

  post(data:string, cb:any){
    this.http.post(`${this.url}/timeline/add`,data)
    .subscribe(
      res =>{
        console.log(res)
        cb(this.helper(res))
      },
      err=>{
        this.alert.error("ERROR IN CONECTIVITY")
        return false   
      }
    )
  }

  helper(payload:any){
      if(payload.Status == 'false'){
        this.alert.error(payload.Reason)
        return false
      }
      this.alert.success("Added to timeline")
      return true
  }

  delete(id:string){
    console.log("in delete in service")
    console.log(id)
      return this.http.delete(`${this.url}/timeline/delete/${id}`)
  }
  edit(id:string, post:string){
    return this.http.put(`${this.url}/timeline/edit/${id}`,post)
}


}
