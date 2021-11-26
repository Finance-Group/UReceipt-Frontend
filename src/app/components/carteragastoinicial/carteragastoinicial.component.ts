import { Component, OnInit } from '@angular/core';
import {AppService} from "../../services/app.service";
import {CarteraGastoInicial} from "../../models/carteraGastoInicial";
import {Router} from "@angular/router";

@Component({
  selector: 'app-carteragastoinicial',
  templateUrl: './carteragastoinicial.component.html',
  styleUrls: ['./carteragastoinicial.component.css']
})
export class CarteragastoinicialComponent implements OnInit {

  elements: Array<CarteraGastoInicial> = [];

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
