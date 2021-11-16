import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lengthStringFormatePipe'
})
export class LengthStringFormatePipePipe implements PipeTransform {


    transform(value: string|undefined): any {
      if(value==null){
          return null;
      }
      else if(value.length<=140){
          return value.substring(0,140);
      }
      else if(value.length>140){
          return value.substring(0,140)+"....";
      }
  
      
    }

}
