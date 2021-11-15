import { Component, Input, OnInit } from '@angular/core';
import { AdminDashboardService } from 'src/app/Service/admin-dashboard.service';

@Component({
  selector: 'app-heightthreeapllyproject',
  templateUrl: './heightthreeapllyproject.component.html',
  styleUrls: ['./heightthreeapllyproject.component.css']
})
export class HeightthreeapllyprojectComponent implements OnInit {
  @Input () projectId:number|undefined;
  @Input () isAccept:boolean|undefined;
  @Input () requiredSkills:string|undefined;
  @Input () projectTitle:string|undefined;
  @Input () countApplyJob:number|undefined;
  @Input () projectDetails:string|undefined;
  @Input () dateOfCreate:string|undefined;
  @Input () expectedBudget:any|undefined;
  @Input () categoryId:any|undefined;
  @Input () estimatedDeliveryTime:any|undefined;
  @Input () isComplete:boolean|undefined;
  constructor(public adminDashboardService: AdminDashboardService) {
    this.adminDashboardService.GetallProjectHighestApplyJob();
   }

  ngOnInit(): void {
  }

}
