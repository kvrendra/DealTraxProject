import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
// import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SettingsService } from '../core/_services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  closeResult: string = '';
  settingForm!: FormGroup;
  settingCoraId!: number;
  trackingSteps=''
  inlineRadioOptions=''
  sequence=''
  dependencies=''
  notifications=''
  within=''
  type=''
  dmsEvidence=''
  settingInitData:any
  status=''
  singleRec:any
  enableSubmit=true


  tempData: any = [
    {
      trackingSteps: 'Post-Delivery Inspection',
      Include: 'yes',
      Sequence: '1',
      dependencies: 'Temp Tag',
      notifications: 'sales person',
      within: '2 days',
      type: 'automatic',
      dmsEvidence:
        'Generally The Deal Date – There Should Be A Service Record For The PDI (Post-Delivery, Not Pre-Delivery)',
      status: 'Active',
    },
    {
      trackingSteps: 'pre-Delivery Inspection',
      Include: 'yes',
      Sequence: '2',
      dependencies: 'Temp Tag',
      notifications: 'sales person',
      within: '5 days',
      type: 'automatic',
      dmsEvidence:
        'Generally The Deal Date – There Should Be A Service Record For The PDI (Post-Delivery, Not Pre-Delivery)',
      status: 'Active',
    },
    {
      trackingSteps: 'pre-Delivery ',
      Include: 'no',
      Sequence: '3',
      dependencies: 'Temp Tag',
      notifications: 'controller',
      within: '7 days',
      type: 'manual',
      dmsEvidence:
        'Generally The Deal Date – There Should Be A Service Record For The PDI (Post-Delivery, Not Pre-Delivery)',
      status: 'In Active',
    },
  ];

  constructor(
    // private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private service:SettingsService) {}

  ngOnInit(): void {

    //this.service.trackingSteps().subscribe




    this.settingCoraId = 1;
    this.getSettings(this.settingCoraId);
    this.service.viewSettings(this.settingCoraId).subscribe((data)=>{
      console.log(data)
      this.settingInitData=data

      // this.trackingSteps=this.settingInitData.sTrackingsteps
      // this.inlineRadioOptions=data.
      // sequence=''
      // dependencies=''
      // notifications=''
      // within=''
      // type=''
      // dmsEvidence=''

    });
  //   this.settingForm = new FormGroup({
  //     trackingSteps: new FormControl(),
  //     inlineRadioOptions: new FormControl(),
  //     sequence: new FormControl(),
  //     dependencies: new FormControl(),
  //     notifications: new FormControl(),
  //     within: new FormControl(),
  //     type: new FormControl(),
  //     dmsEvidence: new FormControl(),
  //   });
   }

  getSettings(id: number) {
    let token = localStorage.getItem('UserToken');
  }
  addSetting(data: any) {}
  EditRow(content: any, data: any) {
    // this.modalService.open(content);
    console.log(data);
  }
  DeleteRow(obj:any)
   {
    const obj1={
      
      "action": "D",
      "sId": obj.sId,
      "sCoraAcctId": 0,
      "sTrackingsteps": '',
      "sInclude": '',
      "sSequence": 0,
      "sDependencies":'',
      "sNotifications": '',
      "sWithin":0,
      "sType": '',
      "sDmsevidence": '',
      "sStatus": '',
      "err_no": 0      
  }
  this.service.saveSettings(obj1).subscribe((data)=>{
    console.log(data)
    this.ngOnInit()
    alert('Delete Success')
  })



  }
  open(content: any) {
    // this.modalService.open(content)
  }
  close() {
    // this.modalService.dismissAll();
  }
  addRec()
  {
    this.enableSubmit=true
    this.trackingSteps= '',
     this.inlineRadioOptions='',
      this.sequence='',
     this.dependencies='',
    this.notifications='',
    this.within='',
    this.type='',
    this.dmsEvidence= '',
    this.status=''
    
    
  }
  savingSettings()
  {

    const obj1={
      
        "action": "A",
        "sId": 0,
        "sCoraAcctId": 1,
        "sTrackingsteps": this.trackingSteps,
        "sInclude": this.inlineRadioOptions,
        "sSequence": this.sequence,
        "sDependencies":this.dependencies,
        "sNotifications": this.notifications,
        "sWithin": this.within,
        "sType": this.type,
        "sDmsevidence": this.dmsEvidence,
        "sStatus": this.status,
        "err_no": 0      
    }
    this.service.saveSettings(obj1).subscribe((data)=>{
      console.log(data)
      this.ngOnInit()
      alert('Add Settings Success')
    })


  }
  editRecord(obj:any)
  {
    this.enableSubmit=false
   this.trackingSteps= obj.sTrackingsteps,
    this.inlineRadioOptions=obj.sInclude,
     this.sequence=obj.sSequence,
    this.dependencies=obj.sDependencies,
   this.notifications=obj.sNotifications,
   this.within=obj.sWithin,
   this.type=obj.sType,
   this.dmsEvidence= obj.sDmsevidence,
   this.status=obj.sStatus
   this.singleRec=obj
   

  }

  editUpdate(id:any)
  {

    const obj1={
      
        "action": "U",
        "sId": id,
        "sCoraAcctId": 1,
        "sTrackingsteps": this.trackingSteps,
        "sInclude": this.inlineRadioOptions,
        "sSequence": this.sequence,
        "sDependencies":this.dependencies,
        "sNotifications": this.notifications,
        "sWithin": this.within,
        "sType": this.type,
        "sDmsevidence": this.dmsEvidence,
        "sStatus": this.status,
        "err_no": 0      
    }
    this.service.saveSettings(obj1).subscribe((data)=>{
      console.log(data)
      this.ngOnInit()
      alert('Update Success')
    })


  }
}

