import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'homes',
    canActivate: [ AuthGuard ],
    data: {authGuardPipe: redirectUnauthorizedToLogin},
    loadChildren: () => import('./homes/homes.module').then( m => m.HomesPageModule)
  },
  {
    path: 'homealumnos',
    canActivate: [ AuthGuard ],
    data: {authGuardPipe: redirectUnauthorizedToLogin},
    loadChildren: () => import('./homealumnos/homealumnos.module').then( m => m.HomealumnosPageModule)
  },
  {
    path: 'anadirhogar',
    canActivate: [ AuthGuard ],
    data: {authGuardPipe: redirectUnauthorizedToLogin},
    loadChildren: () => import('./anadirhogar/anadirhogar.module').then( m => m.AnadirhogarPageModule)
  },
  {
    path: 'arrendatarioprincipal',
    canActivate: [ AuthGuard ],
    data: {authGuardPipe: redirectUnauthorizedToLogin},
    loadChildren: () => import('./arrendatarioprincipal/arrendatarioprincipal.module').then( m => m.ArrendatarioprincipalPageModule)
  },
  {
    path: 'guardados',
    canActivate: [ AuthGuard ],
    data: {authGuardPipe: redirectUnauthorizedToLogin},
    loadChildren: () => import('./guardados/guardados.module').then( m => m.GuardadosPageModule)
  },
  {
    path: 'porprecio',
    canActivate: [ AuthGuard ],
    data: {authGuardPipe: redirectUnauthorizedToLogin},
    loadChildren: () => import('./porprecio/porprecio.module').then( m => m.PorprecioPageModule)
  },
  {
    path: 'aditarcuarto',
    canActivate: [ AuthGuard ],
    data: {authGuardPipe: redirectUnauthorizedToLogin},
    loadChildren: () => import('./aditarcuarto/aditarcuarto.module').then( m => m.AditarcuartoPageModule)
  },
  {
    path: 'loginadmin',
    loadChildren: () => import('./loginadmin/loginadmin.module').then( m => m.LoginadminPageModule)
  },
  {
    path: 'infopenguin',
    canActivate: [ AuthGuard ],
    data: {authGuardPipe: redirectUnauthorizedToLogin},
    loadChildren: () => import('./infopenguin/infopenguin.module').then( m => m.InfopenguinPageModule)
  },
  {
    path: 'detalles',
    loadChildren: () => import('./detalles/detalles.module').then( m => m.DetallesPageModule)
  },
  {
    path: 'cuartos500to1000',
    loadChildren: () => import('./cuartos500to1000/cuartos500to1000.module').then( m => m.Cuartos500to1000PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
