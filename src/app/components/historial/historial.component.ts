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

  personId: string
  listCarteras: Cartera[]

  ngOnInit(): void {
    this.personId = this.AppService.getToken()
  }

  getCarterasByPersonId() {

  }
}
