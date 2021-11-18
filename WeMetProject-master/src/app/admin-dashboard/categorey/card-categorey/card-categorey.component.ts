import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminDashboardService } from 'src/app/Service/admin-dashboard.service';
import { HomeServiceService } from 'src/app/Service/home-service.service';

@Component({
  selector: 'app-card-categorey',
  templateUrl: './card-categorey.component.html',
  styleUrls: ['./card-categorey.component.css']
})
export class CardCategoreyComponent implements OnInit {
  @Input () categoryId:number|undefined;
  @Input () image:any|undefined;
  @Input ()  categoryTitle :string|undefined;
  constructor(public adminDashboardService: AdminDashboardService,private router:Router,public homeServiceService:HomeServiceService, private http: HttpClient,public dialog:MatDialog) {
    this.adminDashboardService.GetAllCategorey();
   }
   getImagePath(value:string ){
    // debugger
    let basePath="../../../../assets/images/Uploaded File/";
    return basePath+value;
    }
  //   openDialog(id:any,categoreytitle:any,image:any) {

  //     const dialogConfig = new MatDialogConfig();
  //     this.categoryId=id;
  //     dialogConfig.disableClose = true;
  //     dialogConfig.autoFocus = true;
  
  //     this.dialog.open(AppUpdateCategoreyDialogComponent,{
  //       panelClass: 'applyDialog',
  //       data:{
  //         categoryId:id,
  //         categoryTitle:categoreytitle,
  //         image:image,
      
  //       }
  //     },

  //     );
  // }
  ngOnInit(): void {
  }

}
