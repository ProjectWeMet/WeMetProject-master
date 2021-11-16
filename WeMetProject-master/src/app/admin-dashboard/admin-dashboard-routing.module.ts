import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { DashboredAdminComponent } from './dashbored-admin/dashbored-admin.component';
import { HeightthreeapllyprojectComponent } from './heightthreeapllyproject/heightthreeapllyproject.component';
import { ReportTableUSERComponent } from './report-table-user/report-table-user.component';
import { TableUsersComponent } from './table-users/table-users.component';

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
},
{
  path:"tableuser",
  component:TableUsersComponent
},
{
  path:"heightApplyProject",
  component:HeightthreeapllyprojectComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
