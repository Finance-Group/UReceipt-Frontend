import { Component, OnInit } from '@angular/core';
import {CarteraGastoFinal} from "../../models/carteraGastoFinal";
import {AppService} from "../../services/app.service";
import {Router} from "@angular/router";
import {GastoInicial} from "../../models/gastoInicial";
import {GastoFinal} from "../../models/gastoFinal";
import {Formato} from "../../models/formato";

@Component({
  selector: 'app-creargastosiniciales',
  templateUrl: './creargastosiniciales.component.html',
  styleUrls: ['./creargastosiniciales.component.css']
})
export class CreargastosinicialesComponent implements OnInit {

  formatos: Array<Formato> = [];
  gastosiniciales: Array<GastoInicial> =[];
  gastosfinales: Array<GastoFinal> =[];

  formatoactual: Formato = {} as Formato;
  gastoinicialactual: GastoInicial = {} as GastoInicial;
  gastofinalactual: GastoFinal = {} as GastoFinal;

  elements: Array<CarteraGastoFinal> = [];
  elements2: Array<CarteraGastoFinal> = [];

  headElements = [
    'N°',
    'Nombre del gasto inicial',
    'Formato',
    'Monto del gasto inicial'
  ];
  headElements2 = [
    'N°',
    'Nombre del gasto final',
    'Formato',
    'Monto del gasto final'
  ];

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.getFornatos()
    this.getGastosFinales();
    this.getGastosIniciales();
  }
  getFornatos(): void {
    this.appService.getFornatos()
      .subscribe((response: any) => {
        this.formatos = response.content;
        console.log(this.formatos);
      });
  }
  getGastosIniciales(): void {
    this.appService.getGastosIniciales()
      .subscribe((response: any) => {
        this.gastosiniciales = response.content;
        console.log(this.gastosiniciales);
      });
  }
  getGastosFinales(): void {
    this.appService.getGastosFinales()
      .subscribe((response: any) => {
        this.gastosfinales = response.content;
        console.log(this.gastosfinales);
      });
  }
  getFormatoById(id: number): void {
    this.appService.getFormatoById(id)
      .subscribe(data => {
        this.formatoactual = JSON.parse(JSON.stringify(data)).data
        console.log(this.formatoactual)
      })
  }
  getGastoInicialById(id: number): void {
    this.appService.getGastoInicialById(id)
      .subscribe(data => {
        this.gastoinicialactual = JSON.parse(JSON.stringify(data)).data
        console.log(this.gastoinicialactual)
      })
  }
  getGastoFinalById(id: number): void {
    this.appService.getGastoInicialById(id)
      .subscribe(data => {
        this.gastofinalactual = JSON.parse(JSON.stringify(data)).data
        console.log(this.gastofinalactual)
      })
  }
  getGastosInicialesByCarteraId(id: number): void {
    this.appService.getGastosInicialesByCarteraId(id)
      .subscribe((response: any) => {
        this.elements = response.content;
        console.log(this.elements);
      });
  }
  getGastosFinalesByCarteraId(id: number): void {
    this.appService.getGastosFinalesByCarteraId(id)
      .subscribe((response: any) => {
        this.elements = response.content;
        console.log(this.elements);
      });
  }
}
