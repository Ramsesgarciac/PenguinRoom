import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PorprecioPageRoutingModule } from './porprecio-routing.module';

import { PorprecioPage } from './porprecio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PorprecioPageRoutingModule
  ],
  declarations: [PorprecioPage]
})
export class PorprecioPageModule {}
