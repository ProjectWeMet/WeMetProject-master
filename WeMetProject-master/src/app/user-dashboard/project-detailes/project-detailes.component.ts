import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';
import { AddApplyDialogComponent } from './add-apply-dialog/add-apply-dialog.component';

@Component({
  selector: 'app-project-detailes',
  templateUrl: './project-detailes.component.html',
  styleUrls: ['./project-detailes.component.css']
})
export class ProjectDetailesComponent implements OnInit {

  constructor(public UserService:UserDashboardService, public dialog:MatDialog,private router:Router) { 
    // this.UserService.getApplyJobByProject(this.UserService.projectDetaile[0].projectId);

  }

  goToUser(id:any){
debugger
    this.UserService.getUserById(id);
    this.router.navigate(['user/profile']);
  }
  ngOnInit(): void {
  
  }

  getImagePath(value:any ){
    let basePath="../../../../assets/images/Uploaded File/";
    if(value==null)
    return "../../../../assets/img/User.png";
    console.log(basePath);
    return basePath+value;
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
