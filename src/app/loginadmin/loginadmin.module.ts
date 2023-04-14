import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginadminPageRoutingModule } from './loginadmin-routing.module';

import { LoginadminPage } from './loginadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LoginadminPageRoutingModule
  ],
  declarations: [LoginadminPage]
})
export class LoginadminPageModule {}
