import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysBetweenDates'
})
export class DaysBetweenDatesPipe implements PipeTransform {

  transform(value: string|undefined): any {
    if(value==null){
        return null;
    }
    let date1: Date = new Date();
    let date2: Date = new Date(value);
    let timeInMilisec: number = date1.getTime() - date2.getTime();
    let daysBetweenDates: number = Math.floor(timeInMilisec / (1000 * 60 * 60 * 24));
    if(daysBetweenDates<1){
        let daysBetweenDates: number = Math.floor(timeInMilisec / (1000 * 60 * 60 ));
        if(daysBetweenDates<1){
            let daysBetweenDates: number = Math.floor(timeInMilisec / (1000 * 60));
            if(daysBetweenDates==1){
                return  daysBetweenDates+" minute ago";  
            }
            else if(daysBetweenDates>1){
                return  daysBetweenDates+" minutes ago";  
            }
            else {
                return " Now !";  
            }
        }
        else if(daysBetweenDates == 1){
            return   daysBetweenDates+" hour ago";  
        }
        else if(daysBetweenDates >1){
            return   daysBetweenDates+" hours ago";  
        }
        
    }
    else if(daysBetweenDates==1){
        return   daysBetweenDates +" day ago";  
    }
    else if(daysBetweenDates>1){
        return   daysBetweenDates +" days ago";  
    }
  }

}
