import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeServiceService } from 'src/app/Service/home-service.service';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input () projectId:number|undefined;
  @Input () fName:string|undefined;
  @Input () lName:string|undefined;
  @Input () projectTitle:string|undefined;
  @Input () countApplyJob:number|undefined;
  @Input () projectDetails:string|undefined;
  @Input () dateOfCreate:string|undefined;

  @Input () categoryTitle:string|undefined;
  @Input () categoryId:any|undefined;
  @Input () image:any|undefined;
  
  
  constructor(public UserService:UserDashboardService,private router:Router,public homeServiceService:HomeServiceService) { 
  
    this.UserService.getAllProjects();
    this.homeServiceService.GetAllCategorey();
  }
 
  getImagePath(value:string ){
    debugger
    let basePath="../../../../assets/images/Uploaded File/";
    return basePath+value;
    }

  ngOnInit(): void {
  }

}
