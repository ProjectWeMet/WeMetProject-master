import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';
import { AddMyWorkdialogComponent } from './add-my-workdialog/add-my-workdialog.component';
import { DeleteMyWorkDialogComponent } from './delete-my-work-dialog/delete-my-work-dialog.component';
import { EditMyWorkDialogComponent } from './edit-my-work-dialog/edit-my-work-dialog.component';

@Component({
  selector: 'app-my-work-profile',
  templateUrl: './my-work-profile.component.html',
  styleUrls: ['./my-work-profile.component.css']
})
export class MyWorkProfileComponent implements OnInit {

  constructor(public UserService:UserDashboardService,private router:Router, public dialog:MatDialog) { 
    this.UserService.getUserById(this.UserService.UserId)
  }

  goToPersonalInfo(){
    this.router.navigate(['user/profile']);
  }
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(AddMyWorkdialogComponent,{
      panelClass: 'workDialog',
      data: {
        userID: this.UserService.UserId,


      }
    }    
    );
}
goToMyWork(id:number){
  debugger
  this.UserService.getMyWorkById(id);
  this.router.navigate(['user/myWorkProfile']);

  
}
goToMySchedule(id:number){
  debugger
  this.UserService.getAllSchedule(id);
  this.router.navigate(['user/mySchedule']);
  
}
getImagePath(value:any ){
  let basePath="../../../../assets/images/Uploaded File/";
  if(value==null)
  return "../../../../assets/img/User.png";
  console.log(basePath);
  return basePath+value;
  }

  EditInfo(){
    if(this.UserService.UserId){
      this.UserService.getUserById(this.UserService.UserId);
      this.router.navigate(['user/editInfo']);
    }
  }
EditDialog(card:any){
  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;

  this.dialog.open(EditMyWorkDialogComponent,{
    panelClass: 'workDialog',
    data: {
      userID: this.UserService.UserId,
      title:card.titel,
      completionDate:card.completionDate,
      imageName:card.imageName,
      description:card.description,
      skill:card.skill,
      link:card.link,
      myWorkId:card.myWorkId
    }
  }    
  );
}
DeleteDialog(card:any){
  const dialogRef = this.dialog.open(DeleteMyWorkDialogComponent,{
    panelClass: 'deleteDialog',
    data: {
      title:card.titel,
      myWorkId:card.myWorkId
      
    }
    
  });
}
goToMyProject(id:any){
  this.UserService.getAllSchedule(id);
this.router.navigate(['user/ShownProjects']);
}
goToinfo(id:number){
  this.UserService.getUserById(id);
  this.router.navigate(['user/myProfile']);
}
  ngOnInit(): void {
  }

}
function ConfirmationDialog(ConfirmationDialog: any, arg1: { data: { message: string; buttonText: { ok: string; cancel: string; }; }; }) {
  throw new Error('Function not implemented.');
}

