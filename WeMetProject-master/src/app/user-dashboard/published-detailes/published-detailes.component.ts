import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';
import { AddScheduleDialogComponent } from './add-schedule-dialog/add-schedule-dialog.component';

@Component({
  selector: 'app-published-detailes',
  templateUrl: './published-detailes.component.html',
  styleUrls: ['./published-detailes.component.css']
})
export class PublishedDetailesComponent implements OnInit {

  constructor(public UserService:UserDashboardService, public dialog:MatDialog) { 
  }

  ngOnInit(): void {
  }
  openDialog(userId:number,idApplyJob:number) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(AddScheduleDialogComponent,{
      panelClass: 'applyDialog',
      data: {
        userID: userId,
        idApply:idApplyJob
      }
    }    
    );
}
  downloadFile(filename :any){
    let basePath="../../../../assets/cv/Uploaded File/";
    const path:string=basePath+filename;
    let link = document.createElement("a");
    link.download = filename;
    link.href = path;
    link.click();
  }

}
