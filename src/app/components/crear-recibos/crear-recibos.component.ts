import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-crear-recibos',
  templateUrl: './crear-recibos.component.html',
  styleUrls: ['./crear-recibos.component.css']
})
export class CrearRecibosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect() {
    this.router.navigate(["../historial"])
  }

  redirect2() {
    this.router.navigate(["../recibo-nuevo"])
  }

}
