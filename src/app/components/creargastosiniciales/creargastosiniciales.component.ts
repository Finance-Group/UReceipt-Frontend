import { Component, OnInit } from '@angular/core';
import {CarteraGastoFinal} from "../../models/carteraGastoFinal";
import {AppService} from "../../services/app.service";
import {Router} from "@angular/router";
import {GastoInicial} from "../../models/gastoInicial";
import {GastoFinal} from "../../models/gastoFinal";
import {Formato} from "../../models/formato";
import {CrearCarteraGastoInicial} from "../../models/crearCarteraGastoInicial";

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
      .subscribe(
        data => {
          this.formatos = JSON.parse(JSON.stringify(data)).data
        },
        error => {
          alert("Error")
          console.log(error)
        })
  }
  getGastosIniciales(): void {
    this.appService.getGastosIniciales()
      .subscribe(
        data => {
          this.gastosiniciales = JSON.parse(JSON.stringify(data)).data
        },
        error => {
          alert("Error")
          console.log(error)
        })
  }
  getGastosFinales(): void {
    this.appService.getGastosFinales()
      .subscribe(
        data => {
          this.gastosfinales = JSON.parse(JSON.stringify(data)).data
        },
        error => {
          alert("Error")
          console.log(error)
        })
  }

  getFormatoById(id: number): void {
    this.appService.getFormatoById(id)
      .subscribe(
        data => {
          this.formatoactual = JSON.parse(JSON.stringify(data)).data
        },
        error => {
          alert("Error")
          console.log(error)
        })
  }
  getGastoInicialById(id: number): void {
    this.appService.getGastoInicialById(id)
      .subscribe(
        data => {
          this.gastoinicialactual = JSON.parse(JSON.stringify(data)).data
        },
        error => {
          alert("Error")
          console.log(error)
        })
  }
  getGastoFinalById(id: number): void {
    this.appService.getGastoInicialById(id)
      .subscribe(
        data => {
          this.gastofinalactual = JSON.parse(JSON.stringify(data)).data
        },
        error => {
          alert("Error")
          console.log(error)
        })
  }

  getGastosInicialesByCarteraId(id: number): void {
    this.appService.getGastosInicialesByCarteraId(id)
      .subscribe(
        data => {
          this.elements = JSON.parse(JSON.stringify(data)).data
        },
        error => {
          alert("Error")
          console.log(error)
        })
  }
  getGastosFinalesByCarteraId(id: number): void {
    this.appService.getGastosFinalesByCarteraId(id)
      .subscribe(
        data => {
          this.elements2 = JSON.parse(JSON.stringify(data)).data
        },
        error => {
          alert("Error")
          console.log(error)
        })
  }

  addCarteraGastoI(carteraid: number, carteraGastoInicial: CrearCarteraGastoInicial): void{
    this.appService.crearCarteraGastoInicial(carteraid,carteraGastoInicial)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      )
  }
}
