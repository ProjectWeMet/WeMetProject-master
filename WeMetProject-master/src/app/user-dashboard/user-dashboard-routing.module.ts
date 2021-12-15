import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJopOfferComponent } from './add-jop-offer/add-jop-offer.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { ProfileComponent } from './profile/profile.component';

import { ProjectsComponent } from '../user-dashboard/projects/projects.component';

import { ProjectDetailesComponent } from './project-detailes/project-detailes.component';
import { PublishedProjectsComponent } from './published-projects/published-projects.component';
import { UsersComponent } from './users/users.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { PublishedDetailesComponent } from './published-detailes/published-detailes.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditProjctComponent } from './edit-project/edit-projct.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { MyScheduleComponent } from './my-schedule/my-schedule.component';
import { MyWorkProfileComponent } from './my-work-profile/my-work-profile.component';
import { ShownProjectsComponent } from './shown-projects/shown-projects.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TestmonialProfileComponent } from './testmonial-profile/testmonial-profile.component';
import { BalanceProfileComponent } from './balance-profile/balance-profile.component';


const routes: Routes = [
  {
    path:'user',
    component:UsersComponent
  },
  {
    path:'projects',
    component:ProjectsComponent

  },
  {
    path:'profile',
    component:ProfileComponent

  },
  {
    path:'myWork',
    component:MyWorkComponent
  },
  {
    path:'myWorkProfile',
    component:MyWorkProfileComponent
  },
  {
    path:'addproject',
    component:AddProjectComponent

  },{
    path:'projectDetailes',
    component:ProjectDetailesComponent
  },{
    path:'publishedProjects',
    component:PublishedProjectsComponent

  },{
    path:'publishedDetailes',
    component:PublishedDetailesComponent
  },
  {
    path:'addJopOffer',
    component:AddJopOfferComponent
  },
  {
    path:'myProfile',
    component:MyProfileComponent
  },
  {
    path:'editInfo',
    component:EditProfileComponent
  },{
    path:'editProject',
    component:EditProjctComponent
  },{
    path:'editAccount',
    component:EditAccountComponent
  }
  ,{
    path:'mySchedule',
    component:MyScheduleComponent
  },
  {
    path:'ShownProjects',
    component:ShownProjectsComponent
  },{
    path:'schedule',
    component:ScheduleComponent
  },{
    path:'testmonial',
    component:TestmonialProfileComponent
  },{
    path:'balance',
    component:BalanceProfileComponent
  }
]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
