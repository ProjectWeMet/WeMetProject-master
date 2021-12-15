import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSliderChange } from '@angular/material/slider';
import { ToastrService } from 'ngx-toastr';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';
//import * as moment from 'moment';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  
  
  constructor(public UserService:UserDashboardService,private toastr:ToastrService ) { 
    this.UserService.getAllCategory();
    this.UserService.GetBalanceById(this.UserService.UserId);

    console.log(new Date(new Date().toString().split('GMT')[0]+'UTC').toISOString());
    // console.log(moment().format("YYYY-MM-DD[T]HH:mm:ss"));
    
  }
  value2:any=10;
  value:any=10;
  addForm = new FormGroup({
    
    ProjectTitle:new FormControl('', [Validators.required]),
    RequiredSkills:new FormControl('', [Validators.required]),
    ProjectDetails:new FormControl('', [Validators.required]),
    
    EstimatedDeliveryTime:new FormControl('', [Validators.required]),
   
    CategoryId:new FormControl('', [Validators.required])});
    

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
  const tax=(this.ExpectedBudget1*2.5)/100;
  const total=this.ExpectedBudget1+tax;
  if( total <= this.UserService.Balance[0].availableBalance){
    debugger
  this.DateOfCreate1=new Date(new Date().toString().split('GMT')[0]+'UTC').toISOString();

  const data2={
    UserId:this.UserService.UserId,
    ProjectTitle:this.addForm.controls.ProjectTitle.value.toString(),
    ProjectDetails:this.addForm.controls.ProjectDetails.value.toString(),
    ExpectedBudget:this.ExpectedBudget1.toString(),
    RequiredSkills:this.addForm.controls.RequiredSkills.value.toString(),
    DateOfCreate:this.DateOfCreate1.toString(),
    EstimatedDeliveryTime:this.addForm.controls.EstimatedDeliveryTime.value.toString(),
    CategoryId:this.CategoryId1
  
  }
  this.UserService.AddNewProject(data2);
}
else{
  this.toastr.warning("The available balance is not enough to add a new project");
}
}
  
  ngOnInit(): void {
    
  }

}
