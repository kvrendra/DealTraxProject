import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { DeallogRoutingModule } from './deallog-routing.module';
import { DeallogComponent } from './deallog.component';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [DeallogComponent],
  imports: [
    CommonModule,
    DeallogRoutingModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DeallogModule { }
