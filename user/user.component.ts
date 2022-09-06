import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GetAllRolesService } from '../core/_services/get-all-roles.service';
//import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { AnonymousSubject } from 'rxjs/internal/Subject';
import { UserService } from '../core/_services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  // All variables used in the modules , most of them can be removed
 //:any=[]
  rolesTotal:any
  userInitData:any
  username=''
  password=''
  dispname=''
  coraid=''
  title=''
  roleid=''
  activestatus=''
  email=''
  showupdatebutton=false // To toggle modal between adding new user and update
  dropdownmultiselected=''
  singleUserById:any
  confirmpassword=''
  editStores:any=[]
  previousVal1=''
  cora_split:any=[]
  storesInitdata:any
 // dropdownmultiselected:any
 allStoreNames:any=[]
 allstoreCoraid:any=[]
  selectedNames:any=[]
  valuesFromDrop:any=[]
  inputboxes:any=[]
  totalSelectoptions=0
  finalCoraSelect:any=[]
  searchtext:any=''

 // CoraAcctName:[]=[]
  //enableEdit:boolean=true

  currentUserName=localStorage.getItem('CurrentUser_uName')
  userTitle=localStorage.getItem('CurrentUserTitle')

  constructor(public uSer:UserService,public roleSev:GetAllRolesService) {


   }

  ngOnInit(): void {
    this.roleSev.getAllRolesUsingService().subscribe((data=>{
      this.rolesTotal=data
    }))
  this.uSer.gettingStores().subscribe((data)=>{
    console.log('stores',data)
    this.storesInitdata=data
    for(let i=0;i<=Object.keys(this.storesInitdata).length;i++)
    {
      let  ab=this.storesInitdata[i].asLegalentityName
      let bb=this.storesInitdata[i].asCoraAcctId
      this.allStoreNames.push(ab)
      this.allstoreCoraid.push(bb)

    }
    //console.log(this.allStoreNames)


  })

    this.uSer.gettingUsersData().subscribe((data)=>{

      this.userInitData=data

    })

  }
  //For changing the cora id to Legal Entitity names or store names we use changeCora() method
  changeCora(id:any)
  {
      // console.log(id)
    if(id.length==1)
    {
    for(let i=0;i<Object.keys(this.storesInitdata).length;i++)
    {
      if(id==this.storesInitdata[i].asCoraAcctId)
      {
        return this.storesInitdata[i].asLegalentityName

      }
      // console.log(this.storesInitdata[i].asDealername)
    }
  }
  else
  {
    let storesObj=[]
    this.coraid=this.coraid.slice(0,-1)
    //console.log(id.length)
    let x:[]=id.split(",")
    //console.log(x)
    for(let j=0;j<x.length;j++)
    {
     //console.log(id[j])
    // console.log(id[j])
      for(let i=0;i<Object.keys(this.storesInitdata).length;i++)
      {

        if(x[j]==this.storesInitdata[i].asCoraAcctId)
        {
          storesObj.push(this.storesInitdata[i].asLegalentityName)
        }

      }

    }
   // console.log(storesObj)
    return storesObj

  }


  }

// To add dropdowns dynamically we used Inputadd()
//
Inputadd(){
  this.totalSelectoptions+=1

  this.inputboxes.push(this.allStoreNames);
 // console.log(this.inputboxes);
//  console.log(this.totalSelectoptions)

}

addDropDown()
  {

   // var label = document.createElement("label");
   // label.innerHTML = "Select an Item: "

    //dropdown values
    // var valuerArray = ["V1", "V2", "V3", "V4"];
   // console.log(this.storesInitdata.asCoraAcctId)
    var valueArray =  this.allstoreCoraid

    // var textArray = ["TEXT1", "TEXT2", "TEXT3", "TEXT4"];
    var textArray = this.allStoreNames

    //create dropdown
    var select = document.createElement("select");
    select.name = "dropdownName";
    select.id = "dropdownId";
   // select.onclick=this.hello123()



    //dropdown items
    for (var i = 0; i < Object.keys(valueArray)?.length; i++) {
        var option = document.createElement("option");
        option.value = valueArray[i];
        option.text = textArray[i];
       select.appendChild(option);
    }

    //add label and dropdown to HTML containers
   // document.getElementById("labelContainer")?.appendChild(label);
    document.getElementById("itemContainer")?.appendChild(select);
  //  document.getElementById("dropdownId")?.addEventListener("click",hello123(event));
  // const ss=document.getElementById("dropdownId")?.value

   // console.log(ss)
      //console.log(option!.text)
   // console.log(this.selected1234)
  //  document.getElementById("itemContainer")?.addEventListener("change", e => {
  //    option.innerHTML
  //  })
  }

  emptyPassword()
  {
    this.password=''
    this.confirmpassword=''
  }

  Inputremove(num : any,indval:any){ // v1 value ofselected value
   // console.log(num)
    console.log(indval)
   // console.log(this.editStores[indval])
    //this.editStores.splice(indval,1)
    this.singleUserById.asCoraAcctId
    this.totalSelectoptions-=1
    const index: number = this.inputboxes.indexOf(num);
    //console.log(index)
    if(index !==1){
      this.inputboxes.splice(index, 1);
      this.cora_split.splice(indval,1);


    }
    // for(let j=0;j<this.cora_split.length;j++)
    // {
    //   if(indval==this.valuesFromDrop[j][0])
    //   {
    //     this.valuesFromDrop.splice(j,1)
    //     console.log(this.valuesFromDrop)

    //   }
    // }
    console.log(this.cora_split)
    let aws2=this.cora_split.join(',')
    console.log(aws2)

   // console.log(this.totalSelectoptions)
  //  console.log()
  }

  //For testing We used readPreviousValue()
  readPreviousValue(event:any,num:any)
  {
    this.previousVal1=event.target.value
    console.log(event.target.value)
  }


// FOR reading DYNAMIC CHANGES IN DROPDOWNS IN ADD, EDIT WE USED   readingdata2()
  readingdata2(event:any,num:any)
  {
   // console.log(this.cora_split)
    let selectedValue:any=event.target.value
    console.log(selectedValue)

    //this.register_user_coraid+=(String)(selectedValue)+','
  //  console.log("register_user_update_coraid",this.register_user_coraid)
    console.log('before splice',this.cora_split)
    this.cora_split.splice(num,1,selectedValue)

   // this.cora_split.push(selectedValue)
    console.log('after splice',this.cora_split)

   let aws=this.cora_split.join(',')
    console.log(aws)


  }


// readingdata2 was devloped from this readingdata() . Not used across module
  // readingdata(event:any,num:any)
  // {
  //  // console.log('ind val',num)
  //   //let abhh=(<HTMLInputElement>document.getElementById('addInput')).value;
  //  // console.log('Look here',abhh)



  //   let selectedValue:any=event.target.value
  //   console.log(selectedValue)
  //   this.register_user_coraid+=(String)(selectedValue)+','
  //   console.log(this.register_user_coraid)
  //   this.coraid=this.register_user_coraid
  //   console.log('CORA FROM READING DATA',this.coraid)
  //  // this.coraid=this.register_user_coraid.splice(-1)

  //  // console.log(this.inputboxes.indexOf(num))
  //  // document.getELe
  //  // console.log(event.target)
  //  if(this.valuesFromDrop.length!=this.totalSelectoptions)
  //  {
  //   this.valuesFromDrop.push([num,selectedValue])
  //  }
  //  else
  //  {
  //   for(let q=0;q<this.valuesFromDrop.length;q++)
  //   {
  //     if(this.valuesFromDrop[q][0]==num)
  //     {
  //       this.valuesFromDrop.splice(q,1,[num,selectedValue])
  //       //this.valuesFromDrop[q].pop()
  //      // this.valuesFromDrop[q].push([num,selectedValue])
  //     }
  //   }
  //  }
  // //  for(let c=0;c<this.valuesFromDrop.length;c++)
  // //  {
  // //   console.log(this.valuesFromDrop[c])
  // //   let z=(this.valuesFromDrop[c][1])
  // //   this.finalCoraSelect.push(z)
  // //  }

  //   //console.log(event.target.value)
  //   //this.selectedNames.push(event.target.value)

  //  // console.log(this.valuesFromDrop)
  //   // for(let c=0;c<this.valuesFromDrop.length;c++)
  //   // {
  //   //  console.log(this.valuesFromDrop[c])
  //   //  let z=this.valuesFromDrop[c][1]
  //   // this.finalCoraSelect.push(z)
  //   // }
  //   // console.log(this.finalCoraSelect)

  // }

  hello123(event:any){
  // let abcf= document.getElementById('itemContainer')?.addEventListener
  // console.log(abcf)





    document.getElementById('itemContainer')?.addEventListener('change',e=>{
      let  cor=(String)(event.target.value)
     // alert(cor)
     this.valuesFromDrop.push(cor)
      //console.log(this.valuesFromDrop)

    //console.log(this.valuesFromDrop)
   const cora_unique=new Set(this.valuesFromDrop)
    console.log('Cora uniques', cora_unique)
     let ght=[]=cor.split(',')
      for(let i=0;i<cor.length;i++)
      {
       // console.log('I value' ,i)
      // console.log(ght[i])
        if(true)
        {
          continue
        }
      }

    })




  //  document.getElementById("dropdownId")?.addEventListener('click',e=>{
  //     let  cor:[]=event.target.value
  //     console.log(cor)

  //    // const cora_unique=[... new Set(cor)]
  //   // console.log(cora_unique)
  //    })


    //  let xyz=(<HTMLInputElement>document.getElementById("dropdownId")).value
    //  console.log(xyz)









      // for(let a=0;a<cor.length;a++)
      // {
      //   if(cor[a] )
      //   {}

      // }

// const unique = (value, index, self) => {
//   return self.indexOf(value) === index
// }
      // const cora_unique=cor.filter(unique)


   // const val=event.target.value
  //  console.log(val)


   //console.log('')
   //return true
  }



  cora_transform(id:any)
  {
    let storesObj=[]

    for(let i=0;i<Object.keys(this.storesInitdata).length;i++)
    {

      if(id==this.storesInitdata[i].asCoraAcctId)
      {
        storesObj.push(this.storesInitdata[i].asLegalentityName)
      }


    }
     return storesObj

  }

  cora_for_edit(id:any)
  {
    let storesObj=[]
    //console.log(id.length)
   // this.coraid=this.coraid.slice(0,-1)
    let x:[]=id.split(",")
    //console.log(x)
    this.inputboxes=[]
    for(let j=0;j<x.length;j++)
    {
      if(x[j]!='')
      this.Inputadd()
     //console.log(id[j])
    // console.log(id[j])
      for(let i=0;i<Object.keys(this.storesInitdata).length;i++)
      {

        if(x[j]==this.storesInitdata[i].asCoraAcctId)
        {
          storesObj.push(this.storesInitdata[i].asLegalentityName)
        }

      }

    }
   // console.log(storesObj)
    return storesObj

  }


  edit(id:any,uname:any)
  {

   if((this.userTitle=='super admin' || this.userTitle=='manager'|| uname==this.currentUserName))
   {
      //this.abcd=`#exampleModalUser`

      // let myDialog:any = document.getElementById("exampleModalUser");

  //   console.log(obj)

    this.showupdatebutton=true
  //   this.username=obj.username
  //  //console.log(this.username)
  //    this.dispname=obj.uDisplayname,
  //   this.password=obj.uPassword,
  //   this.title=obj.uTitle,
  //   this.roleid=obj.urId,
  //   this.coraid=obj.uAsCoraAcctId,
  //   this.email=obj.uEmailId,
  //  this.activestatus =obj.uActive
  //  this.singleUserById=obj
  this.uSer.userbyid(id).subscribe((obj1)=>{
  console.log(obj1)
  this.singleUserById=obj1
  this.username=this.singleUserById.uName
 //  this.username=obj1.uName
   // console.log(this.username)
       this.dispname=this.singleUserById.uDisplayname,
    //  this.password=obj.uPassword,
      this.title=this.singleUserById.uTitle,
      this.roleid=this.singleUserById.urId,
      this.coraid=this.singleUserById.uAsCoraAcctId, //contains previous values from DB
      this.cora_split=this.coraid.split(',')
      this.email=this.singleUserById.uEmailId,
     this.activestatus =this.singleUserById.uActive
     this.password=this.singleUserById.uPassword
     console.log(this.coraid)

    this.editStores= this.cora_for_edit(this.coraid)
    console.log(this.editStores)






  })
  //this.username=this.singleUserById.uName
   }
    else
    {
      alert('Action Not Allowed..');
      // break()
      stop()

    }

  }


 updateUser(id:any)
{ // this.showupdatebutton=false
  //this.coraid=this.coraid.slice(0,-1)
// if(!this.showupdatebutton)
// {
//   this.coraid=this.register_user_coraid.slice(0,-1)
// }
this.coraid=this.cora_split.join(',')



    const user1={
      "uId": id,
      "uName":this.username,
      "uDisplayname":this.dispname,
      "uPassword":'',
      "uTitle":'string',
      "urId":this.roleid,
      "uAsCoraAcctId":this.coraid,
      "uEmailId":this.email,
      "uActive":this.activestatus
  }
  this.uSer.postingUser(user1).subscribe((data)=>{
    console.log(data)
    this.ngOnInit()
  })
  alert('User updated succesfully')

  }
  aler()
  {
    alert('Delete Action Not Allowed for Current User')
  }


  freshAddPage()
  {
    this.confirmpassword=''
    this.username='',
    this.dispname='',
    this.password='',
   this.title='',
    this.roleid='',
    this.coraid='',
    this.email='',
    this.activestatus=''
    this.showupdatebutton=false
    this.inputboxes=[]
    this.cora_split=[]


  }
  passwordUpdate()
  {
    this.coraid=this.cora_split.join(',')


      const user1={
        "uId": this.singleUserById.uId,
        "uName":this.username,
        "uDisplayname":this.dispname,
        "uPassword":this.password,
        "uTitle":this.title,
        "urId":this.roleid,
        "uAsCoraAcctId":this.coraid,
        "uEmailId":this.email,
        "uActive":this.activestatus
  }
  console.log(user1)
  this.uSer.postingUser(user1).subscribe((data)=>{
    console.log(data)




   // this.ngOnInit()
  })
  alert('User Password updated succesfully')

  }




  registerUser(){

    //  console.log('From register user ', this.coraid)
    // if(this.coraid[-1]==',')
    // {
    // console.log('from regis methid, cor aid', this.coraid)
    // this.coraid=this.coraid.slice(0,-1)


    // }
//     if(!this.showupdatebutton)
//     {
//       this.coraid=this.register_user_coraid.slice(0,-1)
// }
this.coraid=this.cora_split.join(',')
   //this.coraid=this.register_user_coraid.slice(0,-1)
    console.log('from registration user methid, coraid', this.coraid)



    const user1={
        "uId": 0,
        "uName":this.username,
        "uDisplayname":this.dispname,
        "uPassword":this.password,
        "uTitle":"string",
        "urId":this.roleid,
        "uAsCoraAcctId":this.coraid,
        "uEmailId":this.email,
        "uActive":this.activestatus
    }
    console.log(user1)
    this.uSer.postingUser(user1).subscribe((data)=>{
      console.log(data)
      alert('New User added Successfully')
      this.ngOnInit()
    })
  }

  deleteRecord(obj:any)
  {
    const user1={
      "uId": obj.uId,
      "uName":'string',
      "uDisplayname":'string',
      "uPassword":'string',
      "uTitle":'string',
      "urId":0,
      "uAsCoraAcctId":'string',
      "uEmailId":'string',
      "uActive":'D'
  }
  console.log(user1)
  this.uSer.postingUser(user1).subscribe((data)=>{
    console.log(data)
    alert('deleted.. ')
    this.ngOnInit()
  })

  }
}




