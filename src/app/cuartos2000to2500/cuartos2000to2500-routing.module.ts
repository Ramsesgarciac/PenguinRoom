import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cuartos2000to2500Page } from './cuartos2000to2500.page';

const routes: Routes = [
  {
    path: '',
    component: Cuartos2000to2500Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cuartos2000to2500PageRoutingModule {}
