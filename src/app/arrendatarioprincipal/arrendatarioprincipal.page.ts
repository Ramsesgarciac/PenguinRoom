import { Component, OnInit } from '@angular/core';
import { RentasService } from '../services/rentas.service';
import renta from '../interfaces/cuarto.interface';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arrendatarioprincipal',
  templateUrl: './arrendatarioprincipal.page.html',
  styleUrls: ['./arrendatarioprincipal.page.scss'],
})
export class ArrendatarioprincipalPage implements OnInit {
  titulo= 'Añadir Hogar'

  formulario: FormGroup;

rentass:renta[];

  constructor(
    private rentaS: RentasService,
    private router: Router
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

    this.formulario=new FormGroup({
      imagen:new FormControl(),
      wifi: new FormControl(),
      casa_o_cuarto:new FormControl(),
      numero_hab: new FormControl(),
      nombre: new FormControl(),
      apellidos: new FormControl(),
      sexo: new FormControl(),
      sobrenombre: new FormControl(),
      correo: new FormControl(),
      telefono: new FormControl(),
      colonia: new FormControl(),
      colonia_renta: new FormControl(),
      numero_casa_renta: new FormControl(),
      calle_renta: new FormControl(),
      precio: new FormControl(),
      frecuencia_pago: new FormControl(),
      deposito_inicial: new FormControl(),
      medidas: new FormControl(),
      tipo_baño: new FormControl(),
      agua_caliente: new FormControl(),
      muebles: new FormControl(),
      requisitos: new FormControl(),
    })
    }

  ngOnInit() {
    this.rentaS.getRentaEdit().subscribe(data=>{
      console.log(data);
    });
    this.rentaS.getRentas().subscribe((rentass) => {
      this.rentass = rentass;
      console.log(rentass); 
    });

    this.rentaS.getRentaEdit().subscribe(data=>{
      console.log(data);
      this.titulo='Editar Hogar';
      this.formulario.patchValue({
        imagen:data.imagen,
        wifi: data.wifi,
        casa_o_cuarto: data.casa_o_cuarto,
        numero_hab: data.numero_hab,
        nombre: data.nombre,
        apellidos: data.apellidos,
        sexo: data.sexo,
        sobrenombre: data.sobrenombre,
        correo: data.correo,
        telefono: data.telefono,
        colonia: data.colonia,
        numero_casa: data.numero_casa,
        calle: data.calle,
        numero_casa_renta: data.numero_casa_renta,
        calle_renta: data.calle_renta,
        precio: data.precio,
        frecuencia_pago: data.frecuencia_pago,
        deposito_inicial: data.deposito_inicial,
        medidas: data.medidas,
        tipo_baño: data.tipo_baño,
        agua_caliente: data.agua_caliente,
        muebles: data.muebles,
        requisitos: data.requisitos,
      })
    })
  }

  async onClickDelete(rentA:renta){
    try{
      const response=await this.rentaS.deleteRentas(rentA);
    }catch(e){
      console.log(e)
    }
  }

  editarHome(room: renta){
    this.rentaS.addRentaEdit(room);
  }

  async onSubmit(){
    this.titulo='Añadir Hogar';
    console.log(this.formulario.value)
    try{
      const response = await this.rentaS.addRenta(this.formulario.value);
      console.log(response);
    }catch(e){
      console.log(e)
    }
  }
}
