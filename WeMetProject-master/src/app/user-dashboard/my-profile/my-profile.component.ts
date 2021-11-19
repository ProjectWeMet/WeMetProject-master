import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor(public UserService:UserDashboardService,private router:Router) {
    this.UserService.getUserById(this.UserService.UserId)
   }

  goToMyWork(id:number){
    debugger
    this.UserService.getMyWorkById(id);
    this.router.navigate(['user/myWorkProfile']);

    
  }
  goToMyTestmonial(id:any){
    this.UserService.GetProjectById(id);
    this.router.navigate(['user/testmonial']);
  }
  goToMySchedule(id:number){
    debugger
    this.UserService.getAllSchedule(id);
    this.router.navigate(['user/mySchedule']);
    
  }
  ngOnInit(): void {
    this.UserService.getUserById(this.UserService.UserId);
  }

  getImagePath(value:any ){
    let basePath="../../../../assets/images/Uploaded File/";
    if(value==null)
    return "../../../../assets/img/User.png";
    console.log(basePath);
    return basePath+value;
    }
    
    goToMyProject(id:any){
      this.UserService.getAllSchedule(id);
    this.router.navigate(['user/ShownProjects']);
    }
    goToinfo(id:number){
      this.UserService.getUserById(id);
      this.router.navigate(['user/myProfile']);
    }
  EditInfo(){
    if(this.UserService.UserId){
      this.UserService.getUserById(this.UserService.UserId);
      this.router.navigate(['user/editInfo']);
    }
  }
  

}
