import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { AdminDashboardService } from 'src/app/Service/admin-dashboard.service';
import { HomeServiceService } from 'src/app/Service/home-service.service';
import { AddApplyDialogComponent } from 'src/app/user-dashboard/project-detailes/add-apply-dialog/add-apply-dialog.component';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

declare var require: any;

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { BaseChartDirective, Color, Label } from 'ng2-charts';
import { couldStartTrivia } from 'typescript';
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-dashbored-admin',
  templateUrl: './dashbored-admin.component.html',
  styleUrls: ['./dashbored-admin.component.css']
})
export class DashboredAdminComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: any;

  @ViewChild('pdfTable')
  pdfTable!: ElementRef;
  
  public downloadAsPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download(); 
     
  }
  year:any=new Date().getFullYear();
  

  barChartOptions :any
  barChartData: any[] =[]
  
  barChartLabels: Label[] = [];
  barChartLegend :any;
  barChartPlugins:any = [];

  public barChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: '#764ebe',

    },
  ];
  
  loaded = false;
  loaded1 = false;

  lineChartData:any[]=[]
  lineChartLabels:Label[]=[]
  lineChartOptions:any
  lineChartColors:Color[]=[]
  lineChartLegend :any;
  lineChartPlugins:any;
getData(){
  debugger
  this.lineChartData = [
    { data: this.adminDashboardService.profitChart , label:'Amount of profit JD'},
  ];
  
  this.lineChartLabels = this.adminDashboardService.monthChart;
  this.lineChartOptions= {
    responsive: true,
  };
  this.lineChartColors = [
    {
      borderColor: 'black',
    },
  ];
  this.lineChartLegend = false;
  this.lineChartPlugins = [];
  this.loaded = true;
  this.loaded1 = true;

  //
  this.barChartOptions = {
    responsive: true,
  };
  this.barChartData = [
    { data: this.adminDashboardService.countProjectChart, label: 'Count Project' }
  ];
  
  this.barChartLabels= this.adminDashboardService.monthChart;
  this.barChartLegend = true;
  this.barChartPlugins = [];

}


  constructor(public adminDashboardService: AdminDashboardService, private http: HttpClient,public homeServiceService:HomeServiceService,public dialog:MatDialog) {
    this.adminDashboardService.ChartProfit();
    this.adminDashboardService.countUser();
    this.adminDashboardService.CountAcceptJobSchedule();
    this.adminDashboardService.CountOpenProject();

    this.adminDashboardService.CountCompleteProject();
  
    this.adminDashboardService.GetallProjectHighestApplyJob();
    // console.log(this.adminDashboardService.profitChart)
  }
 
ngOnInit(): void {
  this.getData();
  

//   setTimeout(() => {
//     this.chart.chart.config.data.datasets = this.adminDashboardService.profitChart
//     this.chart.chart.config.data.labels=this.adminDashboardService.monthChart
//     // this.chart.chart.update()
// }, 200);
}



  

}