import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

import { AdminDashboardService } from 'src/app/Service/admin-dashboard.service';

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

  

  

  constructor(public adminDashboardService: AdminDashboardService, private http: HttpClient) {

    this.adminDashboardService.countUser();
    this.adminDashboardService.CountAcceptJobSchedule();
    this.adminDashboardService.CountCompleteProject();
    this.adminDashboardService.GetAllUsers();

  }
  ngOnInit(): void {

  }

}
