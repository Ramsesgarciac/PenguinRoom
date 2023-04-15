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

}
