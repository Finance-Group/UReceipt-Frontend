import { Component, OnInit } from '@angular/core';
import {AppService} from "../../services/app.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Cartera} from "../../models/cartera";

@Component({
  selector: 'app-carterax',
  templateUrl: './carterax.component.html',
  styleUrls: ['./carterax.component.css']
})
export class CarteraxComponent implements OnInit {

  public carteraId: number
  public cartera: Cartera

  constructor(private router: Router, private AppService: AppService, private route: ActivatedRoute) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap;
      this.carteraId = params.id;
    })
    this.detalleCartera()
  }

  public detalleCartera() {
    this.AppService.getCarteraById(this.carteraId)
      .subscribe(data => {
        this.cartera = JSON.parse(JSON.stringify(data)).data
        this.cartera.tceaTotal *= 100
        console.log(this.cartera)
      })
  }
}
