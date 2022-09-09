import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';
import { io } from "socket.io-client";


@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  connection!: signalR.HubConnection;
  hubHelloMessage: BehaviorSubject<string>;
  //socket = io("https://devtraxapi.axelautomotive.com/message");
  
  
  
  constructor() {
    this.hubHelloMessage = new BehaviorSubject<string>('');
   }
   

   
   

  private setSignalrClientMethods(): void {
    this.connection.on('DisplayMessage', (message: string) => {
      this.hubHelloMessage.next(message);
    });
  }



  
  public initiateSignalrConnection(): Promise<void>{
    return new Promise((resolve, reject) => {
      this.connection = new signalR.HubConnectionBuilder()
        .withUrl('https://devtraxapi.axelautomotive.com/message') // the SignalR server url
        .build();
       // this.setSignalrClientMethods();
      
  
  
      this.connection
        .start()
        .then(() => {
          console.log(`SignalR connection success! connectionId: ${this.connection.connectionId} `);
                 
          resolve();

        })
        .catch((error) => {
          console.log(`SignalR connection error: ${error}`);
          reject();
        });
        let addCoinPriceListener = () => {
          this.connection.on('postMessage', (response) => {
            //this.data = response;
            // this.convertDateToTimeStamp();
            console.log(response)
          })
        }
    
      

       

        
    });
  }


}
