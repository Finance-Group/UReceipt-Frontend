import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppService} from "../../services/app.service";
import {Router} from "@angular/router";
import {CambiarPassword} from "../../models/cambiarPassword";

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css']
})
export class CambiarPasswordComponent implements OnInit {

  userForm: FormGroup
  persona = new CambiarPassword()

  constructor(private fb: FormBuilder, private AppService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    this.userForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  cambiarPassword() {
    this.persona.correo = this.userForm.value.correo
    this.persona.password = this.userForm.value.password
    this.AppService.cambiarPassword(this.persona)
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
