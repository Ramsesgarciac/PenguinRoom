import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomealumnosPage } from './homealumnos.page';

const routes: Routes = [
  {
    path: '',
    component: HomealumnosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomealumnosPageRoutingModule {}
