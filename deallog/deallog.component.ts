import { Component, OnInit } from '@angular/core';
import { Deallog2Service } from '../core/_services/deallog2.service';
import { SettingsService } from '../core/_services/settings.service';
import { UserService } from '../core/_services/user.service';
@Component({
  selector: 'app-deallog',
  templateUrl: './deallog.component.html',
  styleUrls: ['./deallog.component.scss']
})
export class DeallogComponent implements OnInit {
  dataFromService:any
  dataTotal:any
  pageStart=0
  pageEnd=this.pageStart+20
  disab=false
  tracStep:any
  totalUserData:any
  current_logged_in_user:any
  inputTo=''
  inputCC=''
  inputBCC=''
  subject=''
  messsageText=''
  attachmentString:any
  selectedfile:any
  dbpath:any
  userid=localStorage.getItem('CurrentUserid')
  msgForUser:any



  constructor(public ser:Deallog2Service,public s2:SettingsService,public user:UserService) { }

  ngOnInit() {
    this.user.gettingUsersData().subscribe((data)=>{
      console.log('Users Data From Service',data)
      this.totalUserData=data
    })
    this. current_logged_in_user=localStorage.getItem('CurrentUserName')


    // this.ser.getMsgByMsgId(11).subscribe((data)=>{
    //   console.log('message for you', data)

    // })

    this.ser.getMsgByUserId(this.userid).subscribe((data)=>{
      console.log('message for user_id',data)
      this.msgForUser=data //This data contains total messages received by the user
      console.log(`message for you ${this.current_logged_in_user}`, data)
      for(let i=0;i<this.msgForUser.length;i++)
      {
        console.log(this.msgForUser[i].mId)
        this.ser.getMsgByMsgId(this.msgForUser[i].mId).subscribe((data)=>{
          console.log(`message for you ${this.current_logged_in_user}`, data)

        })
      }

    })



    this.ser.getdeallogs().subscribe((data)=>{
      console.log('I am from dealslog')
      console.log(data)
      this.dataTotal=data
      this.dataFromService=this.dataTotal.slice(this.pageStart,this.pageEnd)
     // console.log(Object.keys(data).length)
    })
// here we are sending cora id as 1 by default. we can pass coraID as parameter too
    this.s2.trackingSteps(1).subscribe((trackSteps)=>{
      this.tracStep=trackSteps

    })

  }
  sendMessage()
  {
    let msgobj={
      "mId": 0,
      "mTo": Number(this.inputTo),
      "mCc": Number(this.inputCC),
      "mBcc": Number(this.inputBCC),
      "mFrom": Number(this.userid),
      "mSubject":this.subject,
      "mBody": this.messsageText,
      "mAttach": this.dbpath.dbPath,
      "mStatus": "U"
    }
   // console.log(this.attachmentString)
    console.log(msgobj)

this.ser.postmessage(msgobj).subscribe((data)=>{
  console.log('Post message',data)
})
  }






  selectFile(event:any){
    if(event.target.files && event.target.files[0]){
       var reader=new FileReader();
       reader.onload=(event:any)=>
       this.attachmentString=event.target.result;

       reader.readAsDataURL(event.target.files[0]);

         this.selectedfile=event.target.files[0];

         console.log('selected File', this.selectedfile)
      //   console.log('attachment ',this.attachmentString)


    }
   this.upload()

  }
  upload(){
    this.ser.uploadUsingService(this.selectedfile).subscribe((res:any)=>{

     this.dbpath=res
    console.log(this.dbpath);
     alert('attachment uploaded successfully')
    })

  }








  nextData()
  {

    if(this.pageEnd>=Object.keys(this.dataTotal).length)
    {
      this.disab=true

    }
    else{
      this.disab=false

    this.pageStart+=20
    this.pageEnd=this.pageStart+20
    this.dataFromService=this.dataTotal.slice(this.pageStart,this.pageEnd)
   // console.log(this.dataFromService)
   // console.log(this.pageStart)
   // console.log(this.pageEnd)

    //this.ngOnInit()
    }
  }
  prevData()
  {
    this.disab=false
    this.pageStart-=20
    //this.pageStart+=20
    this.pageEnd=this.pageStart+20
    this.dataFromService=this.dataTotal.slice(this.pageStart,this.pageEnd)
    //console.log(this.dataFromService)
    //console.log(this.pageStart)
    //console.log(this.pageEnd)
    //this.ngOnInit()
  }



}
