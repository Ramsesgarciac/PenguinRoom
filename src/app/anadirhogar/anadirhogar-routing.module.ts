import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnadirhogarPage } from './anadirhogar.page';

const routes: Routes = [
  {
    path: '',
    component: AnadirhogarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnadirhogarPageRoutingModule {}
