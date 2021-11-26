import { Component, OnInit } from '@angular/core';
import { CrearPersona } from 'src/app/models/crearPersona';
import {FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AppService } from "../../services/app.service";
import { IniciarLogin } from 'src/app/models/iniciarLogin';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm!:FormGroup
  log!: IniciarLogin
  persona:Persona

  constructor(private fb: FormBuilder, private AppService: AppService, private router: Router) { }

  ngOnInit(): void {
    if(parseInt(this.AppService.getToken()) > 0) this.router.navigate(["../emision"])
    this.initForm()
  }

  initForm(): void {
    this.userForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    })
  }

  login() {
    let r = new IniciarLogin();
    r.username = this.userForm.value.username
    r.password = this.userForm.value.password
    this.AppService.loginn(r).subscribe((data: any) => {
      this.AppService.setToken(r.username)
      this.router.navigate(["../emision"])
    });
  }

}
