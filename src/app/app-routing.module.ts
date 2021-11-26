import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from './components/home/home.component';
import {CambiarPasswordComponent} from "./components/cambiar-password/cambiar-password.component";
import { EmisionComponent } from './components/emision/emision.component';
import { HistorialComponent } from './components/historial/historial.component';
import { FilterComponent } from './components/filter/filter.component';
import { CarteraxComponent } from './components/carterax/carterax.component';
import {RecibosComponent} from "./components/recibos/recibos.component";
import {CreargastosinicialesComponent} from "./components/creargastosiniciales/creargastosiniciales.component";
import {CarteragastoinicialComponent} from "./components/carteragastoinicial/carteragastoinicial.component";
import {CarteragastofinalComponent} from "./components/carteragastofinal/carteragastofinal.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cambiar-contraseña',
    component: CambiarPasswordComponent
  },
  {
    path: 'emision',
    component: EmisionComponent
  },
  {
    path: 'historial',
    component: HistorialComponent
  },
  {
    path: 'filter',
    component: FilterComponent
  },
  {
    path: 'carterax/:id',
    component: CarteraxComponent
  },
  {
    path: 'recibos',
    component: RecibosComponent
  },
  {
    path: 'gastosiniciales',
    component: CarteragastoinicialComponent
  },
  {
    path: 'gastosfinales',
    component: CarteragastofinalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
