import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable ,} from '@angular/core';


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
export class GetAllRolesService {



  constructor(private http:HttpClient) { }

  getAllRolesUsingService()
  {
    return this.http.get('https://devtraxapi.axelautomotive.com/api/Roles/allRoles',headData)
  }

  getRoleByIDUsingService(id:any)
  {
   return this.http.get('https://devtraxapi.axelautomotive.com/api/Roles/roleById?id='+id,headData)
  }

  saveROLES(obj:any)
    {

     let data22=JSON.stringify(obj)
     console.log(data22)
    return this.http.post('https://devtraxapi.axelautomotive.com/api/Roles/saveRoles',data22,headData)
  }

  UpdateRolePost(obj:any)
  {
    let data22=JSON.stringify(obj)
    return this.http.post('https://devtraxapi.axelautomotive.com/api/Roles/upDateRoles',data22,headData)

  }
}
