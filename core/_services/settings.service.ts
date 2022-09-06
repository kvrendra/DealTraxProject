import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


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
export class SettingsService {

  constructor(public http:HttpClient) { }



  viewSettings(coraid:any)
  {

   // let zz=Number(coraid)
    //console.log(zz)
   // console.log(token)
    return this.http.post(`https://devtraxapi.axelautomotive.com/api/setting/getSettings?cora_Id=1`,coraid,headData)
  }

  saveSettings(obj:any){
    return this.http.post('https://devtraxapi.axelautomotive.com/api/setting/saveSettings',obj,headData)
  }

  trackingSteps(obj:any)
  {
    return this.http.post(`https://devtraxapi.axelautomotive.com/api/setting/getSettingSteps?id=1`,JSON.stringify(obj),headData)
  }
}
