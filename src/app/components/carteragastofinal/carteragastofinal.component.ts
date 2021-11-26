import { Component, OnInit } from '@angular/core';
import {CarteraGastoFinal} from "../../models/carteraGastoFinal";
import {AppService} from "../../services/app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-carteragastofinal',
  templateUrl: './carteragastofinal.component.html',
  styleUrls: ['./carteragastofinal.component.css']
})
export class CarteragastofinalComponent implements OnInit {

  elements: Array<CarteraGastoFinal> = [];

  headElements = [
    'N°',
    'Nombre del gasto inicial',
    'Formato',
    'Monto del gasto inicial'
  ];

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    // this.getGastosInicialesByCarteraId(carteraid);
  }

  getGastosInicialesByCarteraId(carteraid: number): void {
    this.appService.getGastosInicialesByCarteraId(carteraid)
      .subscribe((response: any) => {
        this.elements = response.content;
        console.log(this.elements);
      });
  }

}
