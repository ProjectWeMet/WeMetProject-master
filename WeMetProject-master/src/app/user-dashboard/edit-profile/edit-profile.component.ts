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
      console.log((this.biography.value).toString()) ;
      console.log((this.specialization.value).toString()) ;
      console.log((this.skill.value).toString()) ;
      console.log((this.jobTitle.value).toString());
      console.log(this.UserService.UserId);

      const data2={
        UserId:this.UserService.UserId,
        Specialization:this.specialization.value.toString(),
        Skill:this.skill.value.toString(),
        jobTitle:this.jobTitle.value.toString(),
        biography:this.biography.value.toString(),
        
      
      }
      this.UserService.editUserQualification(data2);
      this.router.navigate(['user/myProfile']);

    }

    EditAccount(){
      if(this.UserService.UserId){
        this.UserService.getUserById(this.UserService.UserId);
        this.router.navigate(['user/editAccount']);
      }
    }

    getImagePath(value:any ){
      let basePath="../../../../assets/images/Uploaded File/";
      if(value==null)
      return "../../../../assets/img/User.png";
      console.log(basePath);
      return basePath+value;
      }

  ngOnInit(): void {
  }

  
}
