import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AdminDashboardService } from 'src/app/Service/admin-dashboard.service';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  @ViewChild('pdfTable')
  pdfTable!: ElementRef;
  constructor(public adminDashboardService: AdminDashboardService) { }

  getImagePath(value:any ){
    let basePath="../../../../assets/images/Uploaded File/";
    if(value==null)
    return "../../../../assets/img/User.png";
    console.log(basePath);
    return basePath+value;
    }
    Delete(id:any){
      this.adminDashboardService.Deletetestimonial(id);
    }
    
    
    public downloadAsPDF() {
      const pdfTable = this.pdfTable.nativeElement;
      var html = htmlToPdfmake(pdfTable.innerHTML);
      const documentDefinition = { content: html };
      pdfMake.createPdf(documentDefinition).download(); 
       
    }
  ngOnInit(): void {
    this.adminDashboardService.getAlltestimonial();
  }

}
