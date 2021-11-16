import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private router:Router,public UserService:UserDashboardService) { }

  specialization=new FormControl("");
  skill=new FormControl("");
  jobTitle =new FormControl("");
  biography =new FormControl("");
  UserId =new FormControl("");
  
  UserId1:any;
  specialization1:any;
  skill1:any;
  jobTitle1:any;
  biography1:any;
  

  onClick(){
    debugger
    
      this.UserId1=this.UserService.UserId;
      console.log(this.UserService.projectDetaile[0].expectedBudget) ;
      const data2={
        UserId:parseInt(this.UserId1),
        specialization:this.specialization.value.toString(),
        skill:this.skill.value.toString(),
        jobTitle:this.jobTitle.value.toString(),
        biography:this.biography.value.toStrig(),
        
      
      }
      this.UserService.editUserQualification(data2);
      
    }

    EditProfile(){
      
    }

  ngOnInit(): void {
  }

  
}
