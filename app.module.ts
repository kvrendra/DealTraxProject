import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {LoginService} from './core/_services/login.service';
import { NgSelectModule } from "@ng-select/ng-select";
import { SignalrService } from './signalr.service';
//import { SearchPipe } from './search.pipe';
//import { SortDirective } from './sort.directive';
@NgModule({
  declarations: [
    AppComponent,
   // SearchPipe,
    //SortDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  // providers: [LoginService],
  bootstrap: [AppComponent],
  providers: [
    LoginService,
    SignalrService,
    {
      provide: APP_INITIALIZER,
      useFactory: (signalrService: SignalrService) => () => signalrService.initiateSignalrConnection(),
      deps: [SignalrService],
      multi: true,
    }
  ],
})
export class AppModule { }
