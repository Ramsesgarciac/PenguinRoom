import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cuartos500to1000PageRoutingModule } from './cuartos500to1000-routing.module';

import { Cuartos500to1000Page } from './cuartos500to1000.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cuartos500to1000PageRoutingModule
  ],
  declarations: [Cuartos500to1000Page]
})
export class Cuartos500to1000PageModule {}
