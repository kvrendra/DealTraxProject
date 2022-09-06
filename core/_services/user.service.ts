import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';


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
export class UserService {

  constructor(public http:HttpClient) { }


  gettingStores()
  {
    return this.http.get('https://devtraxapi.axelautomotive.com/api/store',headData)
  }


  gettingUsersData()
  {
     return this.http.get('https://devtraxapi.axelautomotive.com/api/Users',headData)
  }
  postingUser(obj:any)
  {
    console.log(obj)
    return this.http.post('https://devtraxapi.axelautomotive.com/api/Users/register',JSON.stringify(obj),headData)
  }
  userbyid(obj:any)
  {
    return this.http.get(`https://devtraxapi.axelautomotive.com/api/Users/userbyId?id=${obj}`,headData)
  }
}
