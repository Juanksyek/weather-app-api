// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component'; // Ajusta la ruta según la estructura de carpetas de tu proyecto
import { WeatherSearchComponent } from '../weather-search/weather-search.component'; // Ajusta la ruta según la estructura de carpetas de tu proyecto

@NgModule({
  declarations: [
    WeatherSearchComponent // Deja solo los componentes, directivas y pipes necesarios aquí
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [] // Asegúrate de que esté vacío si usas Angular 12+
})
export class AppModule { }
