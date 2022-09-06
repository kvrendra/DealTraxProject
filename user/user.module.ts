import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { NgSelectModule } from "@ng-select/ng-select";
import { SortDirective } from '../sort.directive';
import { SearchPipe } from '../search.pipe';


@NgModule({
  declarations: [
    UserComponent,
    SortDirective,
    SearchPipe
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule ,




  ]
})
export class UserModule {


 }
