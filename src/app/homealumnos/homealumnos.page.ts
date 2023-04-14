import { Component, OnInit } from '@angular/core';
import { RentasService } from '../services/rentas.service';
import renta from '../interfaces/cuarto.interface';

@Component({
  selector: 'app-homealumnos',
  templateUrl: './homealumnos.page.html',
  styleUrls: ['./homealumnos.page.scss'],
})
export class HomealumnosPage implements OnInit {
  rentass: renta[];

  constructor(private rentaS: RentasService) {
    this.rentass = [
      {
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
            tipo_baño: 'compartido',
            agua_caliente: 'si',
          
          muebles: 'si',
          requisitos: 'ser mayor de edad',
        
      },
    ];
  }
    //si hay wifi
    //aws, cladunary en ionic con firestore
  ngOnInit() {
    this.rentaS.getRentas().subscribe((rentass) => {
      this.rentass = rentass;
      console.log(rentass);
    });
  }
}
