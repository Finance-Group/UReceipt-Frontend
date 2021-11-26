import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from './components/home/home.component';
import {CambiarPasswordComponent} from "./components/cambiar-password/cambiar-password.component";
import { EmisionComponent } from './components/emision/emision.component';
import { HistorialComponent } from './components/historial/historial.component';
import { FilterComponent } from './components/filter/filter.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
