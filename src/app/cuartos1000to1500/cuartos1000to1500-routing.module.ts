import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuartos1000to1500Page } from './cuartos1000to1500.page';

const routes: Routes = [
  {
    path: '',
    component: Cuartos1000to1500Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuartos1000to1500PageRoutingModule {}
