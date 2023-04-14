import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AditarcuartoPageRoutingModule } from './aditarcuarto-routing.module';

import { AditarcuartoPage } from './aditarcuarto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AditarcuartoPageRoutingModule
  ],
  declarations: [AditarcuartoPage]
})
export class AditarcuartoPageModule {}


//crea una aplicacion con ionic angular y aplica un crud con firebase paso a paso incluyendo los servicios y cada uno de los archivos typescript

//implementa la funcion updateDocument
