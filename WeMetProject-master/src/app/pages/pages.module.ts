import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CardsprojectsComponent } from './home/cardsprojects/cardsprojects.component';
import { LengthStringFormatePipe } from './home/cardsprojects/length-string-formate.pipe';
import { DepartmentWeMetComponent } from './home/department-we-met/department-we-met.component';
import { BlogComponent } from './home/blog/blog.component';
import { BlogbyIdComponent } from './home/blogby-id/blogby-id.component';
import { OurTeamComponent } from './about/our-team/our-team.component';
import { OurTeamByIdComponent } from './about/our-team-by-id/our-team-by-id.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { LenghtStringFormatPipe } from './home/lenght-string-format.pipe';
import { HomeProjectComponent } from './home-project/home-project.component';
import { DaysBetweenDatesPipe } from './daysBetweenDates.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HomeProjectDetailesComponent } from './home-project-detailes/home-project-detailes.component';
import { HomeProfileComponent } from './home-profile/home-profile.component';
import { HomeMyworkComponent } from './home-mywork/home-mywork.component';
import { GetDateFormatePipe } from './GetDateFormate.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CardsprojectsComponent,
    LengthStringFormatePipe,
    DepartmentWeMetComponent,
    BlogComponent,
    BlogbyIdComponent,
    OurTeamComponent,
    OurTeamByIdComponent,
    HomeUserComponent,
    
    LenghtStringFormatPipe,
    GetDateFormatePipe,
          HomeProjectComponent,
          DaysBetweenDatesPipe,
          HomeProjectDetailesComponent,
          HomeProfileComponent,
          HomeMyworkComponent
    

 
 

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    MatFormFieldModule,
        MatInputModule
    
   
  ]
})
export class PagesModule { }
