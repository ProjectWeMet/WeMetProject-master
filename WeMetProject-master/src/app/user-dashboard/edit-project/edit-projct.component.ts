import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSliderChange } from '@angular/material/slider';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';

@Component({
  selector: 'app-edit-projct',
  templateUrl: './edit-projct.component.html',
  styleUrls: ['./edit-projct.component.css']
})
export class EditProjctComponent implements OnInit {
  value2:any=10;
  value:any=10;
  categoryId:any
    UserId= new FormControl('', [Validators.required]);
    ProjectTitle=new FormControl('', [Validators.required]);
    RequiredSkills=new FormControl('', [Validators.required]);
    ProjectDetails=new FormControl('', [Validators.required]);
    ExpectedBudget=new FormControl('', [Validators.required]);
    EstimatedDeliveryTime=new FormControl('', [Validators.required]);
    DateOfCreate=new FormControl('', [Validators.required]);
    CategoryId=new FormControl('', [Validators.required]);
    
  constructor(public UserService:UserDashboardService) { 
    this.UserService.getAllCategory();
    
  }
 

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

  this.UserId1=7;
   
  let today = new Date()

  // this.DateOfCreate1=moment().format("YYYY-MM-DD[T]HH:mm:ss");
  console.log(this.UserService.projectDetaile[0].expectedBudget) ;
  const data2={
    projectId:this.UserService.projectDetaile[0].projectId,
    projectTitle:this.ProjectTitle.value.toString(),
    projectDetails:this.ProjectDetails.value.toString(),
    expectedBudget:parseInt( this.UserService.projectDetaile[0].expectedBudget),
    requiredSkills:this.RequiredSkills.value.toString(),
    dateOfCreate:this.UserService.projectDetaile[0].dateOfCreate.toString(),
    estimatedDeliveryTime:this.EstimatedDeliveryTime.value.toString(),
    categoryId:this.UserService.projectDetaile[0].categoryId
  
  }
  // console.log(this.DateOfCreate);
  this.UserService.editProject(data2);
  
}

  ngOnInit(): void {

        // this.ProjectTitle.setValue(this.UserService.projectDetaile[0].projectTitle.toString())

  }
}
