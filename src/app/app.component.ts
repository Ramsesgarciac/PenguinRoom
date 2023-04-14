import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';

interface componente{
  nombre: string,
  icon:string,
  ruta:string,
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  lista:componente[]=[
    {
      nombre:'acerca de nosotros',
      icon:'people',
      ruta:'/infopenguin'
    }
  ]

  user$ = this.auth.authState$.pipe( //aqui se verifica si hay un usuario parap oder mostrarlo
    filter(state => state ? true : false)
  )
  
  constructor(
    private auth:AuthService,
    private router: Router
  ) {}

  async logout(){
    await this.auth.logout();
    this.router.navigate(['/login']);
  }
}
