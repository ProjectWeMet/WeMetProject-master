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
          HomeProjectComponent,
          DaysBetweenDatesPipe
    

 
 

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
    
   
  ]
})
export class PagesModule { }
