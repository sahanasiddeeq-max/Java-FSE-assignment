import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditLabel',
  standalone: true
})
export class CreditLabelPipe implements PipeTransform {

  transform(value: number): string {

    if (value === 1) {
      return '1 Credit';
    }

    if (value > 1) {
      return value + ' Credits';
    }

    return 'No Credits';
  }

}