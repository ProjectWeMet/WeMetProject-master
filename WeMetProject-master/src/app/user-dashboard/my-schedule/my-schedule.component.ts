import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';

@Component({
  selector: 'app-my-schedule',
  templateUrl: './my-schedule.component.html',
  styleUrls: ['./my-schedule.component.css']
})
export class MyScheduleComponent implements OnInit {
  date=new Date(new Date().toString().split('GMT')[0]+'UTC').toISOString();
  constructor(public UserService:UserDashboardService,private router:Router) {
    console.log(this.date)
    console.log("kjk",this.UserService.Schedule.endTime);
   }

  getImagePath(value:string){
    let basePath="../../../../assets/images/Uploaded File/";
    return basePath+value;
    }

    
  ngOnInit(): void {
    
  }

}
