import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';

@Component({
  selector: 'app-cardsprojects',
  templateUrl: './cardsprojects.component.html',
  styleUrls: ['./cardsprojects.component.css']
})
export class CardsprojectsComponent implements OnInit {

  @Input () projectId:number|undefined;
  @Input () fName:string|undefined;
  @Input () lName:string|undefined;
  @Input () projectTitle:string|undefined;
  @Input () countApplyJob:number|undefined;
  @Input () projectDetails:string|undefined;
  @Input () dateOfCreate:string|undefined;
  constructor(public UserService:UserDashboardService ,private router:Router) {
   

   }

  ngOnInit(): void {
  }

}
