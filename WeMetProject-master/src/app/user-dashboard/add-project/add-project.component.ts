import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSliderChange } from '@angular/material/slider';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';
// import * as moment from 'moment';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  
  
  constructor(public UserService:UserDashboardService) { 
    this.UserService.getAllCategory();
    console.log(new Date(new Date().toString().split('GMT')[0]+'UTC').toISOString());
    // console.log(moment().format("YYYY-MM-DD[T]HH:mm:ss"));
    
  }
  value2:any=10;
  value:any=10;
  
    UserId= new FormControl('', [Validators.required]);
    ProjectTitle=new FormControl('', [Validators.required]);
    RequiredSkills=new FormControl('', [Validators.required]);
    ProjectDetails=new FormControl('', [Validators.required]);
    ExpectedBudget=new FormControl('', [Validators.required]);
    EstimatedDeliveryTime=new FormControl('', [Validators.required]);
    DateOfCreate=new FormControl('', [Validators.required]);
    CategoryId=new FormControl('', [Validators.required]);
    

    formatLabel(value2: number) {
      return value2;
    }
   
  categoryFormArray: Array<any> = [];
  UserId1:any;
  ProjectTitle1:any;
  Skills1:any;
  ProjectDetails1:any;
  ExpectedBudget1:any;
  EstimatedDeliveryTime1:any;
  DateOfCreate1:any;
  CategoryId1:any;


  changeClient(value:any) {
    this.CategoryId1=value;
}

onInputChange(event: MatSliderChange) {
  this.value2=event.value
  this.ExpectedBudget1=event.value;
}


onClick(){
debugger
console.log(this.value) ;

  this.UserId1=7;
   
  let today = new Date()

  // this.DateOfCreate1=moment().format("YYYY-MM-DD[T]HH:mm:ss");

  const data2={
    UserId:this.UserId1,
    ProjectTitle:this.ProjectTitle.value.toString(),
    ProjectDetails:this.ProjectDetails.value.toString(),
    ExpectedBudget:this.ExpectedBudget1.toString(),
    RequiredSkills:this.RequiredSkills.value.toString(),
    DateOfCreate:this.DateOfCreate1.toString(),
    EstimatedDeliveryTime:this.EstimatedDeliveryTime.value.toString(),
    CategoryId:this.CategoryId1
  
  }
  console.log(this.DateOfCreate);
  this.UserService.AddNewProject(data2);
}
  
  ngOnInit(): void {
    
  }

}
