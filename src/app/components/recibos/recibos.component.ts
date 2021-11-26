import { Component, OnInit } from '@angular/core';
import {AppService} from "../../services/app.service";
import {Router} from "@angular/router";
import {Recibo} from "../../models/recibo";

@Component({
  selector: 'app-recibos',
  templateUrl: './recibos.component.html',
  styleUrls: ['./recibos.component.css']
})
export class RecibosComponent implements OnInit {

  elements: Array<Recibo> = [];

  headElements = [
    'N°',
    'Fecha de emisión',
    'Fecha de pago',
    'Monto total',
    'Monto de retención',
    'N° dias',
    '% descuento',
    'Monto de descuento',
    'Monto neto',
    'Monto recibido',
    'Monto entregado',
    '% TCEA'
  ];

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    // this.getRecibosByCarteraId(carteraid);
  }

  getRecibosByCarteraId(carteraid: number): void {
    this.appService.getRecibosByCarteraId(carteraid)
      .subscribe((response: any) => {
        this.elements = response.content;
        console.log(this.elements);
      });
  }
}
