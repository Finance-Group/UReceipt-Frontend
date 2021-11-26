import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import { CrearPersona} from "../models/crearPersona"
import { environment } from "../../environments/environment";
import { IniciarLogin } from '../models/iniciarLogin';
import {CambiarPassword} from "../models/cambiarPassword";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient, private cookies: CookieService) { }

  public loginn(como: IniciarLogin) {
    return this.http.post(`${environment.api_url}personas/login`, como);
  }

  public registro(persona: CrearPersona): Observable<{}> {
    return this.http.post(`${environment.api_url}personas/registro`, persona);
  }

  public cambiarPassword(cambio: CambiarPassword): Observable<{}> {
    return this.http.put(`${environment.api_url}personas`, cambio)
  }

  public getAllCarterarByPerson(personaId: number): Observable<{}> {
    return this.http.get(`${environment.api_url}/ureceipt/personas/${personaId}/carteras`)
  }

  setToken(token: any) {
    this.cookies.set("token", token)
  }

  getToken() {
    return this.cookies.get("token")
  }
}
