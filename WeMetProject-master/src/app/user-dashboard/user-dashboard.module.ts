import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailesComponent } from './project-detailes/project-detailes.component';
import { UsersComponent } from './users/users.component';
import { PublishedProjectsComponent } from './published-projects/published-projects.component';
import { ShownProjectsComponent } from './shown-projects/shown-projects.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { EditProjctComponent } from './edit-project/edit-projct.component';
import { HomeComponent } from './home/home.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { SharedModule } from '../shared/shared.module';
import { UserCardComponent } from './users/user-card/user-card.component';
import { CardProjectComponent } from './projects/card-project/card-project.component';
import { LengthStringFormatePipe } from './projects/card-project/lengthStringFormate.pipe';
import { ShowApplyJobPipe } from './projects/card-project/showApplyJob.pipe';
import { DaysBetweenDatesPipe } from './projects/card-project/daysBetweenDates.pipe';
import { AddApplyDialogComponent } from './project-detailes/add-apply-dialog/add-apply-dialog.component';
import { CardPublishedProjectsComponent } from './published-projects/card-published-projects/card-published-projects.component';
import { LenghtStringFormatPipe } from './users/user-card/lenght-string-format.pipe';
import { PublishedDetailesComponent } from './published-detailes/published-detailes.component';
import { AddScheduleDialogComponent } from './published-detailes/add-schedule-dialog/add-schedule-dialog.component';
import { AddJopOfferComponent } from './add-jop-offer/add-jop-offer.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { MyScheduleComponent } from './my-schedule/my-schedule.component';
import { MyWorkProfileComponent } from './my-work-profile/my-work-profile.component';
import { AddMyWorkdialogComponent } from './my-work-profile/add-my-workdialog/add-my-workdialog.component';
import { EditMyWorkDialogComponent } from './my-work-profile/edit-my-work-dialog/edit-my-work-dialog.component';
import { DeleteMyWorkDialogComponent } from './my-work-profile/delete-my-work-dialog/delete-my-work-dialog.component';
import { GetDateFormatePipe } from './projects/card-project/GetDateFormate.pipe';
import { CardShownProjectsComponent } from './shown-projects/card-shown-projects/card-shown-projects.component';
import { ScheduleComponent } from './schedule/schedule.component';





@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectDetailesComponent,
    UsersComponent,
    PublishedProjectsComponent,
    ShownProjectsComponent,
    AddProjectComponent,
    EditProjctComponent,
    HomeComponent,
    MyProfileComponent,
    ProfileComponent,
    EditProfileComponent,
    MyWorkComponent,

    UserCardComponent,

    CardProjectComponent,
    LengthStringFormatePipe,
    LenghtStringFormatPipe,
    GetDateFormatePipe,
    ShowApplyJobPipe,
    DaysBetweenDatesPipe,

    LenghtStringFormatPipe,
   
    AddJopOfferComponent,


    AddApplyDialogComponent,
    CardPublishedProjectsComponent,
    PublishedDetailesComponent,
    AddScheduleDialogComponent,
    EditAccountComponent,
    MyScheduleComponent,
    MyWorkProfileComponent,
    AddMyWorkdialogComponent,
    EditMyWorkDialogComponent,
    DeleteMyWorkDialogComponent,
    CardShownProjectsComponent,
    ScheduleComponent,



   

    

  ],
  entryComponents:[AddApplyDialogComponent]
  ,
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    SharedModule,
  ]
})
export class UserDashboardModule { }
