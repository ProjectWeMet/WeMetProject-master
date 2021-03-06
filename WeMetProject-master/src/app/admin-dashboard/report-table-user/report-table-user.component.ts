import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDashboardService } from 'src/app/Service/admin-dashboard.service';


import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-report-table-user',
  templateUrl: './report-table-user.component.html',
  styleUrls: ['./report-table-user.component.css']
})
export class ReportTableUSERComponent implements OnInit {
  @Input ()   fName :string|undefined;
  @Input () lName :string|undefined;
  @Input ()  projectTitle :string|undefined;
  @Input ()   countApplyJob :number|undefined;
  @Input () dateOfCreate :any|undefined;
  @Input ()  projectId :any|undefined;
  
  @ViewChild('pdfTable')
  pdfTable!: ElementRef;
  IsAccept=true;
  
  public downloadAsPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download(); 
     
  }

  constructor(public adminDashboardService: AdminDashboardService,private router:Router) { 
    this.adminDashboardService.ViewProjectNotAcceptAdmin();

  }
  AcceptProjectt(id:any)
  {debugger
    this.IsAccept=false
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    const currentDate = yyyy + '/' + mm + '/' +dd;
    // const currentDate = '2021/9/1';

    const data = {
      projectId:id,
      currentDate:currentDate
    }
    if(id)
    {
      this.adminDashboardService.AcceptProject(data);
      // this.router.navigate(['admin/report']);
      // this.openProfile.emit();
    }
    else{
      // this.toastr.warning('This item cannot be loded!!')
    }
  }

    RejectProjectt(id:any)
  {debugger
    const data = {projectId:id}
    if(id)
    {
      this.IsAccept=false
      this.adminDashboardService.RejectProject(data);
      // this.router.navigate(['admin/report']);
      // this.openProfile.emit();
    }
    else{
      // this.toastr.warning('This item cannot be loded!!')
    }
  }

  getImagePath(value:any ){
    let basePath="../../../../assets/images/Uploaded File/";
    if(value==null)
    return "../../../../assets/img/User.png";
    console.log(basePath);
    return basePath+value;
    }
  
    goProject(id:any){
      this.adminDashboardService.GetProjectById(id);
      this.router.navigate(['admin/projects']);
    }
    
  ngOnInit(): void {
  }

}
