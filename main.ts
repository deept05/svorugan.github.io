// main.ts

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Adjust path as per your project structure
import { appConfig } from './app/app.config'; // Ensure correct path to app.config

platformBrowserDynamic().bootstrapModule(AppModule, { providers: [{ provide: 'appConfig', useValue: appConfig }] })
  .catch(err => console.error(err));
