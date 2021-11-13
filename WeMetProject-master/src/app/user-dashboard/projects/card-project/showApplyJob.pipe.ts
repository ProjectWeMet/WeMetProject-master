import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showApplyJob'
})
export class ShowApplyJobPipe implements PipeTransform {

  transform(value: number|undefined): any {
    if(value==null){
        return null;
    }
    else if(value==0){
        return "Add first offer"
    }
    else if(value >0){
        return value+" offer"

    }
        
  }

}
