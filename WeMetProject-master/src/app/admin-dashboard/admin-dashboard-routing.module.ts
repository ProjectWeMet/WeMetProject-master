import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutAdminComponent } from './about-admin/about-admin.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { CategoreyComponent } from './categorey/categorey.component';
import { DashboredAdminComponent } from './dashbored-admin/dashbored-admin.component';
import { GetAllContactsComponent } from './get-all-contacts/get-all-contacts.component';
import { ProfitAdminComponent } from './profit-admin/profit-admin.component';
import { ProjectAdminComponent } from './project-admin/project-admin.component';
import { ReportTableUSERComponent } from './report-table-user/report-table-user.component';
import { SearchProjectReportComponent } from './search-project-report/search-project-report.component';
import { TableUsersComponent } from './table-users/table-users.component';
import { UserBalanceComponent } from './table-users/user-balance/user-balance.component';
import { UserProfileComponent } from './table-users/user-profile/user-profile.component';
import { UserPublishedProjectsComponent } from './table-users/user-published-projects/user-published-projects.component';
import { UserWorkComponent } from './table-users/user-work/user-work.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

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
  path:"CategoreyAll",
  component:CategoreyComponent
},
{
  path:"searchProjectRepo",
  component:SearchProjectReportComponent
},
{
  path:"getAllContacts",
  component:GetAllContactsComponent
},
{
  path:"testimonial",
  component:TestimonialComponent
},
{
  path:"profit",
  component:ProfitAdminComponent
},
{
  path:"about",
  component:AboutAdminComponent
},
{
  path:"userProfile",
  component:UserProfileComponent
},
{
  path:"userWork",
  component:UserWorkComponent
},
{
  path:"userBalance",
  component:UserBalanceComponent
},{
  path:"publishedProjects",
  component:UserPublishedProjectsComponent
},{
  path:"projects",
  component:ProjectAdminComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
