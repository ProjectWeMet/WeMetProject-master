import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { DashboredAdminComponent } from './dashbored-admin/dashbored-admin.component';
import { SharedModule } from '../shared/shared.module';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ReportTableUSERComponent } from './report-table-user/report-table-user.component';
import { CardProfileComponent } from './admin-profile/card-profile/card-profile.component';
import { CategoregAllComponent } from './dashbored-admin/categoreg-all/categoreg-all.component';
import { AppUpdateCategoreyDialogComponent } from './dashbored-admin/app-update-categorey-dialog/app-update-categorey-dialog.component';
import { TableUsersComponent } from './table-users/table-users.component';
import { SearchProjectReportComponent } from './search-project-report/search-project-report.component';
import { GetAllContactsComponent } from './get-all-contacts/get-all-contacts.component';
import { CategoreyComponent } from './categorey/categorey.component';
import { CreateCategoreyDialogComponent } from './categorey/create-categorey-dialog/create-categorey-dialog.component';
import { EditeCategoreyDialogComponent } from './categorey/edite-categorey-dialog/edite-categorey-dialog.component';
import { CardCategoreyComponent } from './categorey/card-categorey/card-categorey.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { AboutAdminComponent } from './about-admin/about-admin.component';
import { DaysBetweenDatesPipe } from './daysBetweenDates.pipe';
import { ChartsModule } from 'ng2-charts';
import { ProfitAdminComponent } from './profit-admin/profit-admin.component';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './table-users/user-profile/user-profile.component';
import { UserWorkComponent } from './table-users/user-work/user-work.component';
import { GetDateFormatePipe } from './GetDateFormate.pipe';
import { UserBalanceComponent } from './table-users/user-balance/user-balance.component';
import { UserPublishedProjectsComponent } from './table-users/user-published-projects/user-published-projects.component';
import { LengthStringFormatePipe } from './lengthStringFormate.pipe';
import { ProjectAdminComponent } from './project-admin/project-admin.component';



@NgModule({
  declarations: [
    
    DashboredAdminComponent,
    AdminProfileComponent,
    ReportTableUSERComponent,
    CardProfileComponent,
    CategoregAllComponent,

    AppUpdateCategoreyDialogComponent,
     TableUsersComponent,

     SearchProjectReportComponent,
      
      GetAllContactsComponent,
      CategoreyComponent,
      CreateCategoreyDialogComponent,
      EditeCategoreyDialogComponent,
      CardCategoreyComponent,
      TestimonialComponent,
      AboutAdminComponent,
      DaysBetweenDatesPipe,
      ProfitAdminComponent,
      UserProfileComponent,
      UserWorkComponent,
      GetDateFormatePipe,
      UserBalanceComponent,
      UserPublishedProjectsComponent,
      LengthStringFormatePipe,
      ProjectAdminComponent
      
  
    
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    SharedModule,
    ChartsModule,
    RouterModule
    
    
    
  ]
})
export class AdminDashboardModule { 

 

  
}
