import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { AdminDashboardService } from 'src/app/Service/admin-dashboard.service';
import { HomeServiceService } from 'src/app/Service/home-service.service';
import { CreateCategoreyDialogComponent } from './create-categorey-dialog/create-categorey-dialog.component';
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-categorey',
  templateUrl: './categorey.component.html',
  styleUrls: ['./categorey.component.css']
})
export class CategoreyComponent implements OnInit {
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
  constructor(public adminDashboardService: AdminDashboardService,public homeServiceService:HomeServiceService,public dialog:MatDialog) { 
    this.adminDashboardService.GetAllCategorey();

  }
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(CreateCategoreyDialogComponent,{
      panelClass: 'applyDialog',
     
    },

    );
}

  ngOnInit(): void {
  }

}
