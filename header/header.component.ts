import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Deallog2Service } from '../core/_services/deallog2.service';
import { LoginService } from '../core/_services/login.service';
import { UserService } from '../core/_services/user.service';


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
  allusers:any
  fromUsername:any
  msgDisplay:any=false

  constructor(private service : LoginService,private router : Router,public dealogSer:Deallog2Service,private userServ:UserService) { }

  ngOnInit() {
    this.userServ.gettingUsersData().subscribe((data)=>{
      console.log('users initial data', data)
      this.allusers=data
    })
    this.userDetails=localStorage.getItem('CurrentUserid')
    this.currentUserName=localStorage.getItem('CurrentUserName')
    this.userTitle=localStorage.getItem('CurrentUserTitle')
    this.dealogSer.getMsgByUserId(this.userDetails).subscribe((data)=>{
      console.log('userdeatails...',data)
      this.msg=data
      // for(let i=0;i<this.msg.length;i++)
      // {

      //   this.dealogSer.getMsgByMsgId(this.msg[i].mId).subscribe((data)=>{

      //     console.log(`message for you`, data)
      //     console.log(this.msg[i].mFrom)

      //   })
      // }

      // this.individualMsgs=data

    })

  }

  logout(){
    this.router.navigate(['']);
    localStorage.removeItem("UserToken");
  }


  DeleteMsg(obj:any)
  {
    //this.msgDisplay=true
    this.individualMsgs=obj
    console.log(obj)
    if(obj.mTo==this.userDetails)
    {
   // if(obj.mStatus=="U")
       
     // console.log('to euals to')


       let msgobj={
         "mId": obj.mId,
         "mTo":obj.mTo,
         "mCc": obj.mCc,
         "mBcc": obj.mBcc,
         "mFrom": obj.mFrom,
         "mSubject":obj.mSubject,
         "mBody": obj.mBody,
         "mAttach": obj.mAttach,
         "mStatus": "D"
       }
      // console.log(this.attachmentString)
       console.log('deleted message object',msgobj)

   this.dealogSer.postmessage(msgobj).subscribe((data)=>{
     console.log('Status of message changed to Delete',data)
   })




    }

    this.ngOnInit()


  }
  viewMsg(obj:any)
  {
    this.msgDisplay=true
    this.individualMsgs=obj
    console.log(obj)
    if(obj.mTo==this.userDetails)
    if(obj.mStatus=="U")
    {
     // console.log('to euals to')


       let msgobj={
         "mId": obj.mId,
         "mTo":obj.mTo,
         "mCc": obj.mCc,
         "mBcc": obj.mBcc,
         "mFrom": obj.mFrom,
         "mSubject":obj.mSubject,
         "mBody": obj.mBody,
         "mAttach": obj.mAttach,
         "mStatus": "R"
       }
      // console.log(this.attachmentString)
       console.log(msgobj)

   this.dealogSer.postmessage(msgobj).subscribe((data)=>{
     console.log('Status of message changed to READ',data)
   })




    }

    this.ngOnInit()


  }
  msgPop()
  {
    this.msgDisplay=false
  }


  changeFrom(id:any)
  {
    for(let j=0;j<this.allusers.length;j++)
    {
      if(this.allusers[j].uId==id)
      {
        return  this.allusers[j].displayname
       // this.fromUsername=this.allusers[j].displayname

      }
    }
}
}
