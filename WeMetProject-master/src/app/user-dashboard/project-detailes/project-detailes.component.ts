import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';
import { AddApplyDialogComponent } from './add-apply-dialog/add-apply-dialog.component';

@Component({
  selector: 'app-project-detailes',
  templateUrl: './project-detailes.component.html',
  styleUrls: ['./project-detailes.component.css']
})
export class ProjectDetailesComponent implements OnInit {

  constructor(public UserService:UserDashboardService, public dialog:MatDialog) { 
    // this.UserService.getApplyJobByProject(this.UserService.projectDetaile[0].projectId);

  }

  ngOnInit(): void {
  
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(AddApplyDialogComponent,{
      panelClass: 'applyDialog'
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
