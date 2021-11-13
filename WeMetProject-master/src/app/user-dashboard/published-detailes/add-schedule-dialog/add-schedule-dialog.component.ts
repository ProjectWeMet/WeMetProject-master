import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';
import { ProjectDetailesComponent } from '../../project-detailes/project-detailes.component';

@Component({
  selector: 'app-add-schedule-dialog',
  templateUrl: './add-schedule-dialog.component.html',
  styleUrls: ['./add-schedule-dialog.component.css']
})
export class AddScheduleDialogComponent implements OnInit {
  formGroup =new FormGroup({
    link:new FormControl('',Validators.required),
    Date:new FormControl('',Validators.required),
    StartTime:new FormControl('',Validators.required),
    EndTime:new FormControl('',Validators.required)
  })
  constructor(public UserService:UserDashboardService,@Inject(MAT_DIALOG_DATA) public data: any) {
    // console.log(this.data.userID+"data"+this.data.idApply)
  }

  ngOnInit(): void {
  }
  saveItem(){debugger
   
  
    const date={
      link:(this.formGroup.controls.link.value).toString(),
      Date:(this.formGroup.controls.Date.value).toString(),
      StartTime:("1900-01-01T"+this.formGroup.controls.StartTime.value).toString(),
      EndTime:("1900-01-01T"+this.formGroup.controls.EndTime.value).toString(),
      userId:this.data.userID,
      idApplyJob:this.data.idApply
    }
    const ProjectId=this.UserService.projectDetaile[0].projectId;
    this.UserService.addSchedule(date,ProjectId);
    
  }
  close(){

  }
}
