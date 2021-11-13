import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-sidbar-admin',
  templateUrl: './sidbar-admin.component.html',
  styleUrls: ['./sidbar-admin.component.css']
})
export class SidbarAdminComponent implements OnInit {

  constructor(private router:Router,private spinner: NgxSpinnerService) { }
  
  GoProfileAdmin(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['admin/Profile']);
    }, 2000);
  }
  GoDashboredAdmin(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['admin/dash']);
    }, 2000);
  }
  GoToReportUser(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['admin/report']);
    }, 2000);
  }
  GoTologin(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['']);
    }, 2000);
   
   
  }
  

  ngOnInit(): void {
  }

}
