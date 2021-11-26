import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import { CrearPersona} from "../models/crearPersona"
import { environment } from "../../environments/environment";
import { IniciarLogin } from '../models/iniciarLogin';
import {CambiarPassword} from "../models/cambiarPassword";
import {CookieService} from "ngx-cookie-service";
import {CrearCarteraGastoInicial} from "../models/crearCarteraGastoInicial";
import {CrearCarteraGastoFinal} from "../models/crearCarteraGastoFinal";

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

  public getCarteraById(id: number): Observable<{}> {
    return this.http.get(`${environment.api_url}/ureceipt/carteras/${id}`)
  }

  setToken(token: any) {
    this.cookies.set("token", token)
  }

  getToken() {
    return this.cookies.get("token")
  }

  //Recibos
  getRecibosByCarteraId(carteraid: number): Observable<{}> {
    return this.http.get(`${environment.api_url}/ureceipt/carteras/${carteraid}/recibos`)
  }
  //Formato
  getFornatos(): Observable<{}> {
    return this.http.get(`${environment.api_url}/ureceipt/formatos`)
  }

  getFormatoById(formatoId: number): Observable<{}> {
    return this.http.get(`${environment.api_url}/ureceipt/formatos/${formatoId}`)
  }
  //Gastos
  getGastosIniciales(): Observable<{}> {
    return this.http.get(`${environment.api_url}/ureceipt/gastosiniciales`)
  }

  getGastoInicialById(gastoinicialId: number): Observable<{}> {
    return this.http.get(`${environment.api_url}/ureceipt/gastosiniciales/${gastoinicialId}`)
  }

  getGastosFinales(): Observable<{}> {
    return this.http.get(`${environment.api_url}/ureceipt/gastosfinales`)
  }

  getGastoFinalById(gastofinalId: number): Observable<{}> {
    return this.http.get(`${environment.api_url}/ureceipt/gastosfinales/${gastofinalId}`)
  }

  //Cartera-GastoInicial
  getGastosInicialesByCarteraId(carteraid: number): Observable<{}> {
    return this.http.get(`${environment.api_url}/ureceipt/cartera/${carteraid}/gastosiniciales`)
  }

  getByCarteraIdAndGastoInicialId(carteraid: number, gastoinicialid: number): Observable<{}> {
    return this.http.get(`${environment.api_url}/ureceipt/cartera/${carteraid}/gastosiniciales/${gastoinicialid}`)
  }

  crearCarteraGastoInicial(carteraid: number, carteraGastoInicial: CrearCarteraGastoInicial): Observable<{}> {
    return this.http.post(`${environment.api_url}/ureceipt/cartera/${carteraid}/gastosiniciales`, carteraGastoInicial)
  }

  //Cartera-GastoFinal
  getGastosFinalesByCarteraId(carteraid: number): Observable<{}> {
    return this.http.get(`${environment.api_url}/ureceipt/cartera/${carteraid}/gastosfinales`)
  }

  getByCarteraIdAndGastoFinalId(carteraid: number, gastofinalid: number): Observable<{}> {
    return this.http.get(`${environment.api_url}/ureceipt/cartera/${carteraid}/gastosiniciales/${gastofinalid}`)
  }

  crearCarteraGastoFinal(carteraid: number, carteraGastoFinal: CrearCarteraGastoFinal): Observable<{}> {
    return this.http.post(`${environment.api_url}/ureceipt/cartera/${carteraid}/gastosfinales`, carteraGastoFinal)
  }
}
