import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { DashboredAdminComponent } from './dashbored-admin/dashbored-admin.component';
import { SharedModule } from '../shared/shared.module';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ReportTableUSERComponent } from './report-table-user/report-table-user.component';
import { CardProfileComponent } from './admin-profile/card-profile/card-profile.component';


@NgModule({
  declarations: [
    DashboredAdminComponent,
    AdminProfileComponent,
    ReportTableUSERComponent,
    CardProfileComponent
    
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    SharedModule,
    
  ]
})
export class AdminDashboardModule { 

 

  
}
