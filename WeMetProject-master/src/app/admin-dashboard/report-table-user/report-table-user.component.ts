import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDashboardService } from 'src/app/Service/admin-dashboard.service';

@Component({
  selector: 'app-report-table-user',
  templateUrl: './report-table-user.component.html',
  styleUrls: ['./report-table-user.component.css']
})
export class ReportTableUSERComponent implements OnInit {
  @Input ()   fName :string|undefined;
  @Input () lName :string|undefined;
  @Input ()  projectTitle :string|undefined;
  @Input ()   countApplyJob :number|undefined;
  @Input () dateOfCreate :any|undefined;
  @Input ()  projectId :any|undefined;
  
  constructor(public adminDashboardService: AdminDashboardService,private router:Router) { 
    this.adminDashboardService.ViewProjectNotAcceptAdmin();

  }
  showProfile(id:any)
  {debugger
    const data = {projectId:id}
    if(id)
    {
      this.adminDashboardService.AcceptProject(data);
      // this.router.navigate(['admin/report']);
      // this.openProfile.emit();
    }
    else{
      // this.toastr.warning('This item cannot be loded!!')
    }
  }
  ngOnInit(): void {
  }

}
