import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuartos1500to2000PageRoutingModule } from './cuartos1500to2000-routing.module';

import { Cuartos1500to2000Page } from './cuartos1500to2000.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuartos1500to2000PageRoutingModule
  ],
  declarations: [Cuartos1500to2000Page]
})
export class Cuartos1500to2000PageModule {}
