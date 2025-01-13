import { bootstrapApplication } from '@angular/platform-browser';
//import { appConfig } from './app/app.config';
//import { AppComponent } from './app/app.component';
import { ConsumoComponent } from './app/consumo/consumo.component';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

  // bootstrapApplication(AppComponent, {
  //   providers: [provideHttpClient()]
  // }).catch(err => console.error(err));

  bootstrapApplication(ConsumoComponent, {
    providers: [provideHttpClient(), provideAnimationsAsync()]
  }).catch(err => console.error(err));