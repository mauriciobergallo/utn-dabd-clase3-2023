import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorDeFondoDirective } from './color-de-fondo.directive';
import { PesosToDolarPipe } from './pesos-to-dolar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ColorDeFondoDirective,
    PesosToDolarPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
