// main.ts

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; // Ajusta la ruta según tu estructura de carpetas
import { environment } from './environments/environmet'; // Ajusta la ruta según tu estructura de carpetas

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
