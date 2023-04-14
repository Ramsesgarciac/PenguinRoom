import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnadirhogarPageRoutingModule } from './anadirhogar-routing.module';

import { AnadirhogarPage } from './anadirhogar.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    AnadirhogarPageRoutingModule
  ],
  declarations: [AnadirhogarPage]
})
export class AnadirhogarPageModule {}
