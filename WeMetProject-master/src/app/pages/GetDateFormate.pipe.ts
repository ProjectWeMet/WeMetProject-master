import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getDateFormate'
})
export class GetDateFormatePipe implements PipeTransform {

  transform(value: string|undefined): any {
    if(value==null){
        return null;
    }
    else if(value.substring(0,10)=="1900-01-01") {
        return value.substring(11,16)
    }
    else{
      return value.substring(0,10)

    }
   
        
  }

}
