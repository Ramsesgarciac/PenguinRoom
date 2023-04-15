import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentasService } from '../services/rentas.service';
import renta from '../interfaces/cuarto.interface';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  rentass: renta[];

  constructor(
    private ar:ActivatedRoute,
    private rentaS: RentasService
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
            tipo_baño: 'compartido',
            agua_caliente: 'si',
          
          muebles: 'si',
          requisitos: 'ser mayor de edad',
        
      },
    ];

    this.ar.params.subscribe(
      (rentass:any)=>{
        console.log(rentass)
        this.rentaS.getRenta(rentass.id).subscribe(
          (rentass:any)=>{
            console.log(rentass)
            this.rentass=rentass
          }
        )
      }
    );
  }

  ngOnInit() {
  }

}
