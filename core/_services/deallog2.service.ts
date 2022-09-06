import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

const token=localStorage.getItem('UserToken')

const headData={
  headers:new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  })
}


@Injectable({
  providedIn: 'root'
})
export class Deallog2Service {



  constructor(public http:HttpClient) { }


  getdeallogs()
  {
    return this.http.get('https://devtraxapi.axelautomotive.com/api/dealLog/dealLog?coraId=1',headData)
  }

  postmessage(obj:any){
    return this.http.post('https://devtraxapi.axelautomotive.com/api/messages',JSON.stringify(obj),headData)
  }



  getMsgByMsgId(id:any)
  {
    return this.http.get(`https://devtraxapi.axelautomotive.com/api/messages/Id?Id=${id}`,headData)
  }


  getMsgByUserId(id:any){
    return this.http.get(`https://devtraxapi.axelautomotive.com/api/messages/UserId?Id=${id}`,headData)
  }


  uploadUsingService(file:any)
   {
  // let abcd=JSON.stringify(obj)
  var formData = new FormData();
  formData.append("file", file);


   // console.log('From Service',abcd)
    console.log(formData)
    return this.http.post('https://devtraxapi.axelautomotive.com/api/Upload',formData)
  }




}
