import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { DashboredAdminComponent } from './dashbored-admin/dashbored-admin.component';
import { ReportTableUSERComponent } from './report-table-user/report-table-user.component';

const routes: Routes = [{

  path:"dash",
  component:DashboredAdminComponent
},
{
  path:"Profile",
  component:AdminProfileComponent
},
{
  path:"report",
  component:ReportTableUSERComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
