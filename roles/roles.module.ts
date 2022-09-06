import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [
    RolesComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    FormsModule,
    HeaderModule,
  ]
})
export class RolesModule { }
