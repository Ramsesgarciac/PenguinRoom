import { Component, OnInit } from '@angular/core';
import { RentasService } from '../services/rentas.service';
import renta from '../interfaces/cuarto.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-porprecio',
  templateUrl: './porprecio.page.html',
  styleUrls: ['./porprecio.page.scss'],
})
export class PorprecioPage implements OnInit {

  constructor(
    private rentaS: RentasService,
    private route:Router
  ) {  }

  ngOnInit() {}

  precio500(){
    this.route.navigate(['/cuartos500to1000']);
  }

  precio1000(){
    this.route.navigate(['/cuartos1000to1500']);
  }

  precio1500(){
    this.route.navigate(['/cuartos1500to2000']);
  }

  precio2000(){
    this.route.navigate(['/cuartos2000to2500']);
  }

  precio2500(){
    this.route.navigate(['/cuartos2500to3000']);
  }

}
