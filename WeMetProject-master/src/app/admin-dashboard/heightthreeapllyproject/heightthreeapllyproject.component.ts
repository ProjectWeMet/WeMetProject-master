import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AdminDashboardService } from 'src/app/Service/admin-dashboard.service';
import { HomeServiceService } from 'src/app/Service/home-service.service';
import { CreatecategoreyDialogComponent } from './createcategorey-dialog/createcategorey-dialog.component';

@Component({
  selector: 'app-heightthreeapllyproject',
  templateUrl: './heightthreeapllyproject.component.html',
  styleUrls: ['./heightthreeapllyproject.component.css']
})
export class HeightthreeapllyprojectComponent implements OnInit {
  @Input () projectId:number|undefined;
  @Input () isAccept:boolean|undefined;
  @Input () requiredSkills:string|undefined;
  @Input () projectTitle:string|undefined;
  @Input () countApplyJob:number|undefined;
  @Input () projectDetails:string|undefined;
  @Input () dateOfCreate:string|undefined;
  @Input () expectedBudget:any|undefined;
  @Input () categoryId:any|undefined;
  @Input () estimatedDeliveryTime:any|undefined;
  @Input () isComplete:boolean|undefined;
  constructor(public adminDashboardService: AdminDashboardService,public homeServiceService:HomeServiceService,public dialog:MatDialog) {
    this.adminDashboardService.GetallProjectHighestApplyJob();
   }

   openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(CreatecategoreyDialogComponent,{
      panelClass: 'applyDialog',
     
    },

    );
}






  ngOnInit(): void {
  }

}
