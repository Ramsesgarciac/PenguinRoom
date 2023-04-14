import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomesPage } from './homes.page';

const routes: Routes = [
  {
    path: '',
    component: HomesPage,
    children:[
      {
        path:'homealumnos',
        loadChildren:()=> import('../homealumnos/homealumnos.module').then(m=>m.HomealumnosPageModule)
      },
      {
        path:'guardados',
        loadChildren:()=> import('../guardados/guardados.module').then(m=>m.GuardadosPageModule)
      },
      {
        path:'porprecio',
        loadChildren:()=> import('../porprecio/porprecio.module').then(m=>m.PorprecioPageModule)
      },
      {
        path:'**',
        redirectTo: 'homealumnos',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomesPageRoutingModule {}
