import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HomeServiceService } from 'src/app/Service/home-service.service';
import { AddApplyDialogComponent } from 'src/app/user-dashboard/project-detailes/add-apply-dialog/add-apply-dialog.component';
import { AppUpdateCategoreyDialogComponent } from '../app-update-categorey-dialog/app-update-categorey-dialog.component';

@Component({
  selector: 'app-categoreg-all',
  templateUrl: './categoreg-all.component.html',
  styleUrls: ['./categoreg-all.component.css']
})
export class CategoregAllComponent implements OnInit {
  @Input () categoryId:number|undefined;
  @Input () image:any|undefined;
  @Input ()  categoryTitle :string|undefined;
  constructor(private router:Router,public homeServiceService:HomeServiceService, private http: HttpClient,public dialog:MatDialog) { }
  getImagePath(value:string ){
    debugger
    let basePath="../../../../assets/images/Uploaded File/";
    return basePath+value;
    }
    openDialog(id:any,categoreytitle:any,image:any) {

      const dialogConfig = new MatDialogConfig();
      this.categoryId=id;
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
  
      this.dialog.open(AppUpdateCategoreyDialogComponent,{
        panelClass: 'applyDialog',
        data:{
          categoryId:id,
          categoryTitle:categoreytitle,
          image:image
        }
      },

      );
  }
 

  
  ngOnInit(): void {
  }

}
