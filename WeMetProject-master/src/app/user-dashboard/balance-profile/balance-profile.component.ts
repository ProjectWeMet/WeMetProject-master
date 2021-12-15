import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';
import { AddMyWorkdialogComponent } from '../my-work-profile/add-my-workdialog/add-my-workdialog.component';
import { RechargeDialogComponent } from './recharge-dialog/recharge-dialog.component';

@Component({
  selector: 'app-balance-profile',
  templateUrl: './balance-profile.component.html',
  styleUrls: ['./balance-profile.component.css']
})
export class BalanceProfileComponent implements OnInit {

  ngOnInit(): void {
  }
  constructor(public UserService:UserDashboardService,private router:Router, public dialog:MatDialog) { 
    this.UserService.getUserById(this.UserService.UserId)
  }
  goToMyBalance(id :number){
    this.UserService.GetBalanceById(id);
  this.router.navigate(['user/balance']);
  }

  goToPersonalInfo(){
    this.router.navigate(['user/profile']);
  }
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(RechargeDialogComponent,{
      panelClass: 'workDialog',
      
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
  goToMyTestmonial(id:any){
    this.UserService.GetProjectById(id);
    this.router.navigate(['user/testmonial']);
  }
  EditInfo(){
    if(this.UserService.UserId){
      this.UserService.getUserById(this.UserService.UserId);
      this.router.navigate(['user/editInfo']);
    }
  }


goToMyProject(id:any){
  this.UserService.GetUserProjectById(id);
  this.router.navigate(['user/ShownProjects']);
}
goToinfo(id:number){
  this.UserService.getUserById(id);
  this.router.navigate(['user/myProfile']);
}
}
