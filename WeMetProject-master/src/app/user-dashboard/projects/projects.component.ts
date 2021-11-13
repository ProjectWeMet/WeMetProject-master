import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';
import { UserDashboardModule } from '../user-dashboard.module';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  value:number=10;
  orderBy: string = "Latest";

  constructor(public UserService:UserDashboardService) { 
    this.UserService.getAllCategory();
    this.UserService.getAllProjects()
  }

  ngOnInit(): void {
  }
  
    title=new FormControl("");
    categoryName=new FormControl("");
    startAt=new FormControl("");
    EndAt=new FormControl("");
    BudgetFrom=new FormControl("");
    BudgetTo=new FormControl("");
    Skills=new FormControl("");
 
  formatLabel(value: number) {
    // if (value >= 10) {
    //   return Math.round(value / 10) ;
    // }
    // this.BudgetTo.setValue(value);
    return value;
  }
  categoryFormArray: Array<any> = [];
  title1:any;
  categoryName1:any;
  startAt1:any;
  endAt1:any;
  BudgetFrom1:any;
  BudgetTo1:any;
  Skills1:any;

  search(){debugger
   if(this.startAt.value==""){
    this.startAt1="2000-01-01";

   }
   else{
    this.startAt1=this.startAt.value;

   }
   if(this.EndAt.value==""){
    this.endAt1="2100-01-01";

   }
   else{
    this.endAt1=this.EndAt.value;

   }
   if(this.value==10){
    this.BudgetTo1="";
   }
   else{
    this.BudgetTo1=this.value;
   }
   if(this.categoryFormArray.toString()==""){
    this.categoryName1=null
   }
   else{
    this.categoryName1=this.categoryFormArray.toString()

   }
    this.title1=this.title.value;//c#
    this.BudgetFrom1=10;
    this.Skills1=this.Skills.value;

    const data2={
      ProjectTitle:this.title1.toString(),
      DateFrom:this.startAt1,
      DateTo:this.endAt1.toString(),
      ExpectedBudgetFrom: parseInt(this.BudgetFrom1),
      ExpectedBudgetTo:parseInt(this.BudgetTo1),
      CategoryTitle:this.categoryName1,
      RequiredSkills:this.Skills1.toString()
    }
    this.UserService.searchProject(data2);

  }
 
getOrderBy(){
  switch(this.orderBy) {  
     case "Latest": { 
      this.UserService.getOrderByDateDesc();
      break;
     }
     case "Oldest": { 
      this.UserService.getOrderByDateAsc();
      break;
     }
     case "LeastViewed": { 
      this.UserService.getOrderByCountApplyJobAsc();
        break;
     }
     case "MostViewed": { 
      this.UserService.getOrderByCountApplyJobDesc();
      break;
   }
  }
}
onChange(email:string, isChecked: boolean) {
  if(isChecked) {
    this.categoryFormArray.push(email);
  } else {
    let index = this.categoryFormArray.indexOf(email);
    this.categoryFormArray.splice(index,1);
  }
console.log(this.categoryFormArray.toString())
}
}
