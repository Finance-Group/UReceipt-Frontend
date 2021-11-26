import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Router } from "@angular/router";
import { AppService } from "../../services/app.service";

import {CrearPersona} from "../../models/crearPersona";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm!:FormGroup
  persona = new CrearPersona();

  constructor(private  fb: FormBuilder, private AppService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    this.userForm = this.fb.group({
      num: ['', [Validators.required, Validators.min(1000000)]],
      nombre: ['', Validators.required],
      ruc: ['', [Validators.required, Validators.min(10000000000), Validators.max(10999999999)]],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      documentoId: ['', Validators.required],
    }, {
      //validator: ConfirmedValidator('password', 'confirmPassword')
    })
  }

  register() {
    this.persona.id = this.userForm.value.num
    this.persona.nombre = this.userForm.value.nombre
    this.persona.ruc = this.userForm.value.ruc
    this.persona.correo = this.userForm.value.correo
    this.persona.password = this.userForm.value.password
    this.persona.documentoId = this.userForm.value.documentoId
    this.AppService.registro(this.persona)
      .subscribe(
        response => {
          console.log(response)
          this.router.navigate(["../login"])
        },
        error => {
          alert("Por favor verifique sus datos")
          console.log(error)
        }
      )
  }

}
