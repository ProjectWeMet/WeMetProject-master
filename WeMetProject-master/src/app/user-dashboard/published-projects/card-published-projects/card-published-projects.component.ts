import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';

@Component({
  selector: 'app-card-published-projects',
  templateUrl: './card-published-projects.component.html',
  styleUrls: ['./card-published-projects.component.css']
})
export class CardPublishedProjectsComponent implements OnInit {
  @Input () projectId:number|undefined;
  @Input () isAccept:boolean|undefined;
  @Input () isComplete:boolean|undefined;
  @Input () projectTitle:string|undefined;
  @Input () countApplyJob:number|undefined;
  @Input () dateOfCreate:string|undefined;
  @Input () projectDetails:string|undefined;
  @Input () isExecution:string|undefined;

  constructor(public UserService:UserDashboardService ,private router:Router) {
  }

  ngOnInit(): void {
  }
  ViewDetailes(){
    if(this.projectId){
      this.UserService.GetProjectById(this.projectId);
      this.router.navigate(['user/publishedDetailes']);
    }
    
  }
}
