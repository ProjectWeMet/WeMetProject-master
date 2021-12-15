import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AdminDashboardRoutingModule } from './admin-dashboard/admin-dashboard-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { SidbarAdminComponent } from './shared/sidbar-admin/sidbar-admin.component';





@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    
    
    
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ChartsModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      positionClass :'toast-bottom-right'}),
       NgbModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
