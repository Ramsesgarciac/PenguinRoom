import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { RentasService } from '../services/rentas.service';
import { Router } from '@angular/router';
import renta from '../interfaces/cuarto.interface';

@Component({
  selector: 'app-anadirhogar',
  templateUrl: './anadirhogar.page.html',
  styleUrls: ['./anadirhogar.page.scss'],
})
export class AnadirhogarPage implements OnInit {

  titulo= 'Añadir Hogar'
  
  formulario: FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private rentasS: RentasService,
    private router:Router
  ) { 
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
    this.rentasS.getRentaEdit().subscribe(data=>{
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

  async onSubmit(){
    console.log(this.formulario.value)
    try{
      const response = await this.rentasS.addRenta(this.formulario.value);
      console.log(response);
    }catch(e){
      console.log(e)
    }
    this.router.navigate(['/arrendatarioprincipal'])
  }

}
