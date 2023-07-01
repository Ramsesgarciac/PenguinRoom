import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuartos2000to2500PageRoutingModule } from './cuartos2000to2500-routing.module';

import { Cuartos2000to2500Page } from './cuartos2000to2500.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuartos2000to2500PageRoutingModule
  ],
  declarations: [Cuartos2000to2500Page]
})
export class Cuartos2000to2500PageModule {}
