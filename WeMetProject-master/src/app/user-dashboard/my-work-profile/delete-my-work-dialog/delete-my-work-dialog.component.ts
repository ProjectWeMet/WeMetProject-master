import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';

@Component({
  selector: 'app-delete-my-work-dialog',
  templateUrl: './delete-my-work-dialog.component.html',
  styleUrls: ['./delete-my-work-dialog.component.css']
})
export class DeleteMyWorkDialogComponent implements OnInit {

  constructor(public UserService:UserDashboardService,@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
  }
  delete(){
    this.UserService.DeleteWork(this.data.myWorkId);
    

  }
}
