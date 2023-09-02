import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pesosToDolar'
})
export class PesosToDolarPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    // console.log('Parametros', args);
    // console.log('Valor', value);
    if (args[0] === 'blue') {
      value = value / 750
    } else {
      value = value / 350
    }

    return value;
  }

}
