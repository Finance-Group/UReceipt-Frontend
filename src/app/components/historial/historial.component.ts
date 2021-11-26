import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AppService } from "../../services/app.service";
import {Cartera} from "../../models/cartera";

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  constructor(private AppService: AppService, private router: Router) { }

  personId: number
  public listCarteras: Cartera[]
  public cantidadCarteras: number

  ngOnInit(): void {
    this.personId = parseInt(this.AppService.getToken())
    this.getCarterasByPersonId()
  }

  getCarterasByPersonId() {
    console.log(this.AppService.getToken())
    console.log(this.personId)
    this.AppService.getAllCarterarByPerson(this.personId)
      .subscribe(
        data => {
          this.listCarteras = JSON.parse(JSON.stringify(data)).data
          console.log(data)
          this.cantidadCarteras = this.listCarteras.length
          console.log(this.cantidadCarteras)
        })
  }

  redirect() {
    this.router.navigate(["../filter"])
  }
}
