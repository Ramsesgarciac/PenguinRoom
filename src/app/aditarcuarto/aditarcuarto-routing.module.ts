import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AditarcuartoPage } from './aditarcuarto.page';

const routes: Routes = [
  {
    path: '',
    component: AditarcuartoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AditarcuartoPageRoutingModule {}
