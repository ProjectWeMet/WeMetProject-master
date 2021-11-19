import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';
import { AddScheduleDialogComponent } from '../published-detailes/add-schedule-dialog/add-schedule-dialog.component';
import { EditScheduleDialogComponent } from './edit-schedule-dialog/edit-schedule-dialog.component';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  title=new FormControl("");
  name=new FormControl("");

  dateSend=new FormControl(null);
  data:any;

  constructor(public UserService:UserDashboardService, public dialog:MatDialog,private router:Router) { 
    this.UserService.getAllScheduleByUserId(this.UserService.UserId);

  }

 
  openDialog(scheduleId:number,link:any,date:any,startTime:any,endTime:any) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(EditScheduleDialogComponent,{
      panelClass: 'applyDialog',
      data: {
        scheduleId: scheduleId,
        link:link,
        date:date,
        startTime:startTime,
        endTime:endTime
      }
    }    
    );
}
  ViewDetailes(){
    // if(this.projectId){
    //   this.UserService.GetProjectById(this.projectId);
    //   this.router.navigate(['user/publishedDetailes']);
    // }
    
  }
  getImagePath(value:any ){
    let basePath="../../../../assets/images/Uploaded File/";
    if(value==null)
    return "../../../../assets/img/User.png";
    console.log(basePath);
    return basePath+value;
    }
  showProfile(userId:number)
  {debugger
    this.UserService.getUserById(userId);
    this.router.navigate(['user/profile']);
  }
  showProject(projectId:number){
    this.UserService.GetProjectById(projectId)
    this.router.navigate(['user/publishedDetailes']);

  }
  accept(idJobOffer:any){debugger
    this.UserService.acceptJobSchedule(idJobOffer)

  }
  ngOnInit(): void {
  }
  search(){debugger
    if(this.dateSend.value==null || this.dateSend.value=="" ){
      this.data={
        userId: this.UserService.UserId,
        projectTitle:this.title.value.toString(),
        dateSchedule:null,
        userName:this.name.value.toString(),       
      }
    }
    else{
       this.data={
        userId: this.UserService.UserId,
        projectTitle:this.title.value.toString(),
        dateSchedule:this.dateSend.value.toString(),
        userName:this.name.value.toString(),       
      }
    }
    
    this.UserService.searchSchedule(this.data)
  }

}
