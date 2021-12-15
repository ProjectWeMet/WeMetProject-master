import { Component, OnInit } from '@angular/core';
import { AdminDashboardService } from 'src/app/Service/admin-dashboard.service';

@Component({
  selector: 'app-profit-admin',
  templateUrl: './profit-admin.component.html',
  styleUrls: ['./profit-admin.component.css']
})
export class ProfitAdminComponent implements OnInit {

  constructor(public adminDashboardService: AdminDashboardService) { 
    this.adminDashboardService.GetAllProfit()
   }

  ngOnInit(): void {
  }

}
