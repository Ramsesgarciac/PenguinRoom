import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PorprecioPage } from './porprecio.page';

const routes: Routes = [
  {
    path: '',
    component: PorprecioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PorprecioPageRoutingModule {}
