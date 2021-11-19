import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSliderChange } from '@angular/material/slider';
import { Router } from '@angular/router';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';

@Component({
  selector: 'app-add-jop-offer',
  templateUrl: './add-jop-offer.component.html',
  styleUrls: ['./add-jop-offer.component.css']
})
export class AddJopOfferComponent implements OnInit {

  constructor(public UserService:UserDashboardService,private router:Router) { 
    this.UserService.getAllCategory();
    console.log(new Date(new Date().toString().split('GMT')[0]+'UTC').toISOString());

  }
  value2:any=10;
  value:any=10;
  
  
    ProjectTitle=new FormControl('', [Validators.required]);
    RequiredSkills=new FormControl('', [Validators.required]);
    ProjectDetails=new FormControl('', [Validators.required]);
    ExpectedBudget=new FormControl('', [Validators.required]);
    EstimatedDeliveryTime=new FormControl('', [Validators.required]);
    DateOfCreate=new FormControl('', [Validators.required]);
    CategoryId=new FormControl('', [Validators.required]);
    InterviewLink=new FormControl('', [Validators.required]);

    formatLabel(value2: number) {
      return value2;
    }
   
  
  UserIdMan:any;
  ProjectTitle1:any;
  Skills1:any;
  ProjectDetails1:any;
  ExpectedBudget1:any;
  EstimatedDeliveryTime1:any;
  DateOfCreate1:any;
  CategoryId1:any;
  OfferValue1:any;
  OfferDetails1:any;
  DateCreate1:any;
  InterviewLink1:any;
  UserIdUser:any;

  changeClient(value:any) {
    this.CategoryId1=value;
}
onInputChange(event: MatSliderChange) {
  this.value2=event.value
  this.ExpectedBudget1=event.value;
}

onClick(){
debugger


  // this.UserIdMan=7;
  // this.UserIdUser=1;
  this.DateCreate1=new Date(new Date().toString().split('GMT')[0]+'UTC').toISOString();
   

  const data2={
    
    UserId1:this.UserService.UserId,
    UserId2:this.UserService.User[0].userId,
    ProjectTitle:this.ProjectTitle.value.toString(),
    ProjectDetails:this.ProjectDetails.value.toString(),
    ExpectedBudget:this.ExpectedBudget1.toString(),
    RequiredSkills:this.RequiredSkills.value.toString(),
    DateOfCreate:this.DateCreate1,
    EstimatedDeliveryTime:this.EstimatedDeliveryTime.value.toString(),
    CategoryId:this.CategoryId1,
    OfferValue:this.ExpectedBudget1.toString(),
    OfferDetails:this.ProjectDetails.value.toString(),
    DateCreate:this.DateCreate1,
    InterviewLink:this.InterviewLink.value.toString()
  }

  this.UserService.AddProjectToUser(data2);
  this.router.navigate(['user/user']);
}
  
goToAddProject(){
  this.router.navigate(['user/addproject']);
}
  ngOnInit(): void {
  }

}
