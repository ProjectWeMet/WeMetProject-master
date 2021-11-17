import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getDateFormate'
})
export class GetDateFormatePipe implements PipeTransform {

  transform(value: string|undefined): any {
    if(value==null){
        return null;
    }
    else {
        return value.substring(0,10)
    }
   
        
  }

}
