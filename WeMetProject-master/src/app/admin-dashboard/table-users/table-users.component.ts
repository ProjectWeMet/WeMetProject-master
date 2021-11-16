import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AdminDashboardService } from 'src/app/Service/admin-dashboard.service';



import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css']
})
export class TableUsersComponent implements OnInit {
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
  @ViewChild('pdfTable')
  pdfTable!: ElementRef;
  
  public downloadAsPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download(); 
     
  }
  
  constructor(public adminDashboardService: AdminDashboardService) { 
    this.adminDashboardService.GetAllUsers();
  }

  ngOnInit(): void {
  }

}
