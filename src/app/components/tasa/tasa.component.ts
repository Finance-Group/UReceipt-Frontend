import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-tasa',
  templateUrl: './tasa.component.html',
  styleUrls: ['./tasa.component.css']
})
export class TasaComponent implements OnInit {

  carteraForm: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    this.carteraForm = this.fb.group({
      dias: ['', Validators.required],
      plazo: ['', Validators.required],
      tasa: ['', Validators.required],
      pc: [''],
      fecha: ['', Validators.required],
      moneda: ['', Validators.required]
    })
  }

}
