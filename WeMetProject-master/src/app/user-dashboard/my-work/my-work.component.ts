import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.css']
})
export class MyWorkComponent implements OnInit {

  constructor(public UserService:UserDashboardService,private router:Router) { }

  goToMyWork(id:number){
    debugger
    this.UserService.getMyWorkById(id);
    this.router.navigate(['user/myWork']);
    
  }
  goToMySchedule(id:number){
    debugger
    this.UserService.getAllSchedule(id);
    this.router.navigate(['user/mySchedule']);
    
  }

  
  getImagePath(value:string ){
    let basePath="../../../../assets/images/Uploaded File/";
    return basePath+value;
    }

  goToPersonalInfo(){
    this.router.navigate(['user/profile']);
  }
  ngOnInit(): void {
  }

}
