import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuartos2500to3000PageRoutingModule } from './cuartos2500to3000-routing.module';

import { Cuartos2500to3000Page } from './cuartos2500to3000.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuartos2500to3000PageRoutingModule
  ],
  declarations: [Cuartos2500to3000Page]
})
export class Cuartos2500to3000PageModule {}
