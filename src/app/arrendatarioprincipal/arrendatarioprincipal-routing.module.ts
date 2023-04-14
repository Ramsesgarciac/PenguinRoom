import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArrendatarioprincipalPage } from './arrendatarioprincipal.page';

const routes: Routes = [
  {
    path: '',
    component: ArrendatarioprincipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArrendatarioprincipalPageRoutingModule {}
