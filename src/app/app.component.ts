import { Component } from '@angular/core';

@Component({
  selector: 'da-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aplicarClaseTextoGrandeFondoNegro: boolean = true;
  aplicarFondoVerde: boolean = true;
  aplicarTextBlanco: boolean = true;

  mostrarContenidoNgIf: boolean = true;

  listaDeCadenas: string[] = ['Pedro', 'Luis', 'Carlos', 'Martin'];

  hinchaDe: string = 'nada';

  precio: number = 1500;

  mauricioPersona: any = {
    nombre: 'Pedro',
    apellido: 'Pascal',
    edad: 38,
    fechaDeNacimiento: new Date(1984, 8, 12),
    domicilio: {
      direccion: 'Bla bla',
      barrio: 'Lastarria',
      ciudad: 'Santiago de Chile'
    }
  }
}
