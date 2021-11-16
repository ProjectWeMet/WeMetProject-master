import { Component, OnInit } from '@angular/core';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(public UserService:UserDashboardService) {
    this.UserService.getAllScheduleByUserId(this.UserService.UserId);
  }

  ViewDetailes(){
    // if(this.projectId){
    //   this.UserService.GetProjectById(this.projectId);
    //   this.router.navigate(['user/publishedDetailes']);
    // }
    
  }
  ngOnInit(): void {
  }

}
