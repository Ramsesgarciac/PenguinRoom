import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuartos2500to3000Page } from './cuartos2500to3000.page';

const routes: Routes = [
  {
    path: '',
    component: Cuartos2500to3000Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuartos2500to3000PageRoutingModule {}
