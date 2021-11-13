import { Component, Input, OnInit } from '@angular/core';
import { AdminDashboardService } from 'src/app/Service/admin-dashboard.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  constructor(public adminDashboardService:AdminDashboardService) {
    this.adminDashboardService.GetProfileAdmin();
   }

  ngOnInit(): void {
   
  }

}
