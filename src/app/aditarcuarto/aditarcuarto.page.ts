import { Component, OnInit } from '@angular/core';
import { RentasService } from '../services/rentas.service';

@Component({
  selector: 'app-aditarcuarto',
  templateUrl: './aditarcuarto.page.html',
  styleUrls: ['./aditarcuarto.page.scss'],
})
export class AditarcuartoPage implements OnInit {

  constructor(
    private rentaS:RentasService
  ) { }

  ngOnInit() {
  }

}
