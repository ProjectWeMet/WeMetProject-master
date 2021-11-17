import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';

@Component({
  selector: 'app-edit-schedule-dialog',
  templateUrl: './edit-schedule-dialog.component.html',
  styleUrls: ['./edit-schedule-dialog.component.css']
})
export class EditScheduleDialogComponent implements OnInit {

  formGroup =new FormGroup({
    link:new FormControl(this.data.link,Validators.required),
    Date:new FormControl(this.data.date,Validators.required),
    StartTime:new FormControl(this.data.startTime,Validators.required),
    EndTime:new FormControl(this.data.endTime,Validators.required)
  })
  constructor(public UserService:UserDashboardService,@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(this.data.startTime)
  }

  ngOnInit(): void {
  }
  saveItem(){debugger
   
  
    const date={
      link:(this.formGroup.controls.link.value).toString(),
      Date:(this.formGroup.controls.Date.value).toString(),
      StartTime:("1900-01-01T"+this.formGroup.controls.StartTime.value).toString(),
      EndTime:("1900-01-01T"+this.formGroup.controls.EndTime.value).toString(),
      scheduleId:this.data.scheduleId
    }
    this.UserService.editSchedule(date);
    
  }
  close(){

  }

}
