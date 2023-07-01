import { Component, OnInit } from '@angular/core';
import { RentasService } from '../services/rentas.service';
import renta from '../interfaces/cuarto.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuartos500to1000',
  templateUrl: './cuartos500to1000.page.html',
  styleUrls: ['./cuartos500to1000.page.scss'],
})
export class Cuartos500to1000Page implements OnInit {

  rentass: renta[];

  constructor(
    private rentaS: RentasService,
    private route:Router
  ) { 
    this.rentass = [
      {
        imagen:'url',
        wifi:'si',
        casa_o_cuarto: 'casa',
        numero_hab: 2,
          nombre: 'ramses',
          apellidos: 'garcia',
          sexo: 'masculino',
          sobrenombre: 'rams',
          correo: 'ramses@gmail.com',
          telefono: 9513543530,

          colonia: 'ramses@gmail.com',
          numero_casa: 8,
          calle: 'Lazaro Cardenas',
          
        
          colonia_renta: 'Zalazar',
          numero_casa_renta: 6,
          calle_renta: 'Sallow',
        
        
          precio: 4,
          frecuencia_pago: 'mensual',
          deposito_inicial: 1500,
          
            medidas: 'Sallow',
            tipo_bano: 'compartido',
            agua_caliente: 'si',
          
          muebles: 'si',
          requisitos: 'ser mayor de edad',
        
      },
    ];
  }

  ngOnInit() {
    this.rentaS.getRentas500to1000().subscribe((rentass) => {
      this.rentass = rentass;
      console.log(rentass);
    });
  }

  verDetalles(id:any){ //esta funcion nos atyudara a ver los detalles de la carta seleccionada por su id
    this.route.navigate(['/detalles', id]);
  }

}
