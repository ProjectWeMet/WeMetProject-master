import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { AdminDashboardService } from 'src/app/Service/admin-dashboard.service';
import { HomeServiceService } from 'src/app/Service/home-service.service';
import { AddApplyDialogComponent } from 'src/app/user-dashboard/project-detailes/add-apply-dialog/add-apply-dialog.component';
declare var require: any;

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-dashbored-admin',
  templateUrl: './dashbored-admin.component.html',
  styleUrls: ['./dashbored-admin.component.css']
})
export class DashboredAdminComponent implements OnInit {
  @Input () userId:number|undefined;
  @Input () fname:string|undefined;
  @Input () lname:string|undefined;
  @Input () phoneNumber:string|undefined;
  @Input () email:string|undefined;
  @Input () dob:any|undefined;
  @Input () country:string|undefined;
  @Input () specialization:string|undefined;
  @Input () biography:string|undefined;
  @Input () imageName:string|undefined;
  @Input () userName:string|undefined;
  @Input () password:string|undefined;
  @Input () roleNameId:string|undefined;
  @Input () jobTitle:string|undefined;
  @Input () isActive:string|undefined;
  @Input () skill:string|undefined;
  @Input () role:string|undefined;
  @Input () createDate:string|undefined;
//
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
  @ViewChild('pdfTable')
  pdfTable!: ElementRef;
  
  public downloadAsPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download(); 
     
  }
  

  

  constructor(public adminDashboardService: AdminDashboardService, private http: HttpClient,public homeServiceService:HomeServiceService,public dialog:MatDialog) {

    this.adminDashboardService.countUser();
    this.adminDashboardService.CountAcceptJobSchedule();
    this.adminDashboardService.CountCompleteProject();
    this.adminDashboardService.GetAllUsers();
    this.homeServiceService.GetAllCategorey();
    this.adminDashboardService.GetallProjectHighestApplyJob();
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

ngOnInit(): void {
}

}