import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfopenguinPageRoutingModule } from './infopenguin-routing.module';

import { InfopenguinPage } from './infopenguin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfopenguinPageRoutingModule
  ],
  declarations: [InfopenguinPage]
})
export class InfopenguinPageModule {}
