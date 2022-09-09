import { Component, OnInit } from '@angular/core';
import { SignalrService } from './signalr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
 
  constructor(public signalrService: SignalrService) { }
  ngOnInit(): void {

    // this.signalrService.connection.on('get')
    
    
    
    // subscribe((hubHelloMessage:String)=>{
    //   console.log('From SignalR Service',hubHelloMessage)
    // })



    
  }
  title = 'trax';
}
