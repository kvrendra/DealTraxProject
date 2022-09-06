import { Component, OnInit } from '@angular/core';

import { GetAllRolesService } from '../core/_services/get-all-roles.service'
//import { DatePipe } from '@angular/common';
//import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
//tempData=[]
allRolesFromDB:any
Modal2Name=''
Modal2Type=''
Modal2Status=''
actionADD:any
actionEDIT:any
forEdit=false
deactivateAddButton=true
deactivateSubmitButton=true


dataForEdit:any
date=new Date()
  constructor(public s1:GetAllRolesService) { }

  ngOnInit(): void {

    //console.log("FROM TS ROLES")
   this.s1.getAllRolesUsingService().subscribe((data:any)=>
   {
   // console.log("I am working")
    //console.log(data)
    this.allRolesFromDB=data
   })

  //  this.s1.getRoleByIDUsingService(2).subscribe((singledata)=>{
  //   console.log('********----------Hellooo-------*******')
  //   console.log(singledata)
  //  })
  }


  // close() {
  //   this.modalService.dismissAll();
  // }
  // open(content: any) {
  //   this.Modal2Name=''
  //   // this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //   //   this.closeResult = `Closed with: ${result}`;
  //   // }, (reason) => {
  //   //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   // });
  //   this.modalService.open(content)
  // }
  TypeSelectedVal(event : any)
  {
    this.Modal2Type=event.target.value

  }
  TypeSelectedValStatus(event : any)
  {
    this.Modal2Status=event.target.value

  }
  del(obj:any)
  {
    // this.actionADD=false
   // this.actionEDIT=true
   const obj33={

    "rId": obj.rId,
    "rName": obj.rName,
    "rType": obj.rType,
    "rStatus":"D",
    "rTs": obj.rTs

  }
  this.s1.UpdateRolePost(obj33).subscribe((data2)=>{
 alert('Deleted')
 this.ngOnInit()
    console.log(data2)
  })

 // console.log(obj33)

 // this.ngOnInit()
  // this.close()

  }


  EditRow(data: any) {
    // this.modalService.open(content);
    // console.log(data);
    this.Modal2Name=data.rName
this.Modal2Type=data.rType
this.Modal2Status=data.rStatus
this.dataForEdit=data
// this.UpdateSubmitRoles(data)
// const obj33={

//   "rId": data.rId,
//   "rName": this.Modal2Name,
//   "rType": this.Modal2Type,
//   "rStatus": this.Modal2Status,
//   "rTs": this.date

// }



// console.log("Obj3333")
// console.log(obj33)

  }
  setFUN()
  {
    this.actionADD=true
    this.actionEDIT=false
    this.Modal2Name=''
    this.forEdit=false
    this.Modal2Type=''
   this.Modal2Status=''
  }
  setFUN2(obj:any)
  {
    this.actionADD=false
    this.actionEDIT=true
    this.forEdit=true
    this.EditRow(obj)
    //this.UpdateSubmitRoles(obj)
  }
  UpdateSubmitRoles(id:any)
  {

    const obj33={

      "rId": id,
      "rName": this.Modal2Name,
      "rType": this.Modal2Type,
      "rStatus": this.Modal2Status,
      "rTs": this.date

    }
    this.s1.UpdateRolePost(obj33).subscribe((data2)=>{
      console.log('Updated')
      console.log(data2)
    })

    this.ngOnInit()
    // this.close()
  }


  saveSubmitRoles()
  {
    this.actionADD=true
    //this.actionEDIT=false
    const obj1={

        "rId": "0",
        "rName": this.Modal2Name,
        "rType": this.Modal2Type,
        "rStatus":this.Modal2Status,
        "rTs":this.date
    }
    console.log(obj1)
    this.s1.saveROLES(obj1).subscribe((data2)=>{
      console.log(data2)
    })

    this.ngOnInit()
    // this.close()
  }




// asendingSort()

// {



//             if(this.currentstate)
//             {

//             this.i6.sort(function(a,b){
//               return a.ipdMrp-b.ipdMrp;
//             });
//             this.filtereditems=this.i6
//             this.currentstate=false;



//           console.log(this.filtereditems)
//             }

//             else
//             if(!this.currentstate)
//             {

//             this.i6.sort(function(a,b){
//               return b.ipdMrp-a.ipdMrp;
//             });
//             this.filtereditems=this.i6
//             this.currentstate=true;

//           // console.log(this.filtereditems)
//             }

// }











}
