import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDashboardService } from 'src/app/Service/admin-dashboard.service';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { FormControl } from '@angular/forms';
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-search-project-report',
  templateUrl: './search-project-report.component.html',
  styleUrls: ['./search-project-report.component.css']
})
export class SearchProjectReportComponent implements OnInit {
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
  @Input () isExecution:boolean|undefined;
  
  @ViewChild('pdfTable')
  pdfTable!: ElementRef;
  
  public downloadAsPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download(); 
     
  }
  constructor(public adminDashboardService: AdminDashboardService,private router:Router) {
    this.adminDashboardService.GetAllProjects()
    this.search();
   }
   ngOnInit(): void {
  }

  title=new FormControl("");
  categoryName=new FormControl("");
  startAt=new FormControl("");
  EndAt=new FormControl("");
  BudgetFrom=new FormControl("");
  BudgetTo=new FormControl("");
  Skills=new FormControl("");

formatLabel(value: number) {
  // if (value >= 10) {
  //   return Math.round(value / 10) ;
  // }
  // this.BudgetTo.setValue(value);
  return value;
}
   categoryFormArray: Array<any> = [];
   title1:any;
   categoryName1:any;
   startAt1:any;
   endAt1:any;
   BudgetFrom1:any;
   BudgetTo1:any;
   Skills1:any;
 
   search(){debugger
    if(this.startAt.value==""){
     this.startAt1="2000-01-01";
 
    }
    else{
     this.startAt1=this.startAt.value;
 
    }
    if(this.EndAt.value==""){
     this.endAt1="2100-01-01";
 
    }
    else{
     this.endAt1=this.EndAt.value;
 
    }
    if(this.categoryFormArray.toString()==""){
     this.categoryName1=null
    }
    else{
     this.categoryName1=this.categoryFormArray.toString()
 
    }
     this.title1=this.title.value;//c#
     this.BudgetFrom1=10;
     this.Skills1=this.Skills.value;
 
     const data2={
       ProjectTitle:this.title1.toString(),
       DateFrom:this.startAt1,
       DateTo:this.endAt1.toString(),
       ExpectedBudgetFrom: parseInt(this.BudgetFrom1),
       ExpectedBudgetTo:parseInt(this.BudgetTo1),
       CategoryTitle:this.categoryName1,
       RequiredSkills:this.Skills1.toString()
     }
     this.adminDashboardService.searchProject(data2);
 
   }
   goProject(id:any){
    this.adminDashboardService.GetProjectById(id);
    this.router.navigate(['admin/projects']);
  }
}
