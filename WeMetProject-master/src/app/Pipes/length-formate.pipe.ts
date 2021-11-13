import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lengthFormate'
})
export class LengthFormatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
