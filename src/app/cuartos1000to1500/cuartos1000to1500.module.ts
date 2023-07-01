import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuartos1000to1500PageRoutingModule } from './cuartos1000to1500-routing.module';

import { Cuartos1000to1500Page } from './cuartos1000to1500.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuartos1000to1500PageRoutingModule
  ],
  declarations: [Cuartos1000to1500Page]
})
export class Cuartos1000to1500PageModule {}
