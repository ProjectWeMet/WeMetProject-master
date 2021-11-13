import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
//import { MatSelectCountryModule } from "@angular-material-extensions/select-country";
import {HttpClientModule} from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';
import {MatSliderModule} from '@angular/material/slider';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NavbarPageComponent } from './navbar-page/navbar-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { SidbarAdminComponent } from './sidbar-admin/sidbar-admin.component';
import { AdminDashboardRoutingModule } from '../admin-dashboard/admin-dashboard-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    UserNavbarComponent,
    UserFooterComponent,
    AdminNavbarComponent,
    AdminFooterComponent,
    NavbarPageComponent,
    FooterPageComponent,
    SidbarAdminComponent  ,
    
    
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule,
    MatSliderModule,
    MatCheckboxModule,
    MatCardModule,
    MatDialogModule,
    NgxMatFileInputModule
      
  ],
  exports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    NavbarPageComponent,
    HttpClientModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    NgxSpinnerModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatDialogModule,
     MatCheckboxModule,
     MatGridListModule,
    SidbarAdminComponent,
    FooterPageComponent,
    UserNavbarComponent,
    UserFooterComponent,
    AdminNavbarComponent,
    AdminFooterComponent,
    NavbarPageComponent,

    MatCardModule,
    MatDialogModule,
    NgxMatFileInputModule




  ]
}
)
export class SharedModule { }
