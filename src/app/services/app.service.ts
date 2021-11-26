import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import { CrearPersona} from "../models/crearPersona"
import { environment } from "../../environments/environment";
import { IniciarLogin } from '../models/iniciarLogin';
import {CambiarPassword} from "../models/cambiarPassword";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  public loginn(como: IniciarLogin) {
    return this.http.post(`${environment.api_url}personas/login`, como);
  }

  public registro(persona: CrearPersona): Observable<{}> {
    return this.http.post(`${environment.api_url}personas/registro`, persona);
  }

  public cambiarPassword(cambio: CambiarPassword): Observable<{}> {
    return this.http.put(`${environment.api_url}personas`, cambio)
  }
}
