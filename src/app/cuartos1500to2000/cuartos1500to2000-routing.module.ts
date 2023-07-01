import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuartos1500to2000Page } from './cuartos1500to2000.page';

const routes: Routes = [
  {
    path: '',
    component: Cuartos1500to2000Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuartos1500to2000PageRoutingModule {}
