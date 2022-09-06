import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Deallog2Service } from '../core/_services/deallog2.service';
import { LoginService } from '../core/_services/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  userDetails:any
  currentUserName:any
  userTitle:any
  msg:any
  individualMsgs:any

  constructor(private service : LoginService,private router : Router,public dealogSer:Deallog2Service) { }

  ngOnInit() {
    this.userDetails=localStorage.getItem('CurrentUserid')
    this.currentUserName=localStorage.getItem('CurrentUserName')
    this.userTitle=localStorage.getItem('CurrentUserTitle')
    this.dealogSer.getMsgByUserId(this.userDetails).subscribe((data)=>{
      console.log('userdeatails...',data)
      this.msg=data


      for(let i=0;i<this.msg.length;i++)
      {

        this.dealogSer.getMsgByMsgId(this.msg[i].mId).subscribe((data)=>{

          console.log(`message for you`, data)

        })
      }
      this.individualMsgs=data

    })
  }
  logout(){
    this.router.navigate(['']);
    localStorage.removeItem("UserToken");
  }
}
