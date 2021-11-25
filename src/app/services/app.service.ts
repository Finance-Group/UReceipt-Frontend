import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import { CrearPersona} from "../models/crearPersona"
import { environment } from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  constructor(private http: HttpClient) { }

  public register(persona: CrearPersona): Observable<{}> {
    return this.http.post(`${environment.api_url}personas/registro`, persona);
  }


}
