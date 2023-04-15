import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuartos500to1000Page } from './cuartos500to1000.page';

const routes: Routes = [
  {
    path: '',
    component: Cuartos500to1000Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuartos500to1000PageRoutingModule {}
