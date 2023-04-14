import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArrendatarioprincipalPageRoutingModule } from './arrendatarioprincipal-routing.module';

import { ArrendatarioprincipalPage } from './arrendatarioprincipal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ArrendatarioprincipalPageRoutingModule
  ],
  declarations: [ArrendatarioprincipalPage]
})
export class ArrendatarioprincipalPageModule {}
