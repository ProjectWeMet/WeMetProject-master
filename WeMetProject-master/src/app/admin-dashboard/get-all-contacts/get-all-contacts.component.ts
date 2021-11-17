import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AdminDashboardService } from 'src/app/Service/admin-dashboard.service';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;


(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-get-all-contacts',
  templateUrl: './get-all-contacts.component.html',
  styleUrls: ['./get-all-contacts.component.css']
})
export class GetAllContactsComponent implements OnInit {
  
  @Input () id:number|undefined;
  @Input () name:string|undefined;
  @Input () phone:string|undefined;
  @Input () message:string|undefined;
  @Input () email:string|undefined;
  @Input () subject:string|undefined;
  

  @ViewChild('pdfTable')
  pdfTable!: ElementRef;
  
  public downloadAsPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download(); 
     
  }

  constructor(public adminDashboardService: AdminDashboardService) { 

    this.adminDashboardService.GetAllContactUs();
 
  }
  DeleteContactss(id1:any)
  {debugger
    // const data = {id:id1}
    if(id1)
    {
      this.adminDashboardService.DeleteContactUs(id1);
  
    }
    else{
    }
  }
  ngOnInit(): void {
  }

}



