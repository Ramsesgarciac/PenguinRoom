import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomealumnosPageRoutingModule } from './homealumnos-routing.module';

import { HomealumnosPage } from './homealumnos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomealumnosPageRoutingModule
  ],
  declarations: [HomealumnosPage]
})
export class HomealumnosPageModule {}
