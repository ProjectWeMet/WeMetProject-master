import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lenghtStringFormat'
})
export class LenghtStringFormatPipe implements PipeTransform {

  transform(value:string|undefined): any {
    if(value==null){
      return null;
  }
  else if(value.length<=190){
      return value.substring(0,190);
  }
  else if(value.length>190){
      return value.substring(0,190)+"....";
  }
  }

}
