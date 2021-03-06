import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagesService } from 'src/app/Service/pages.service';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input () Name:string|undefined;
  @Input () Id:any|undefined;
  @Input () img:any|undefined;
  @Input () Description:string|undefined;
  @Input () logo:any;
  @Input () Email:string|undefined;
  constructor(public UserService:UserDashboardService,private router:Router,public pagesService:PagesService) {
    // this.UserService.GatAllOurTeam();
    this.pagesService.GetAllAboutUs();
   }

  ngOnInit(): void {
  }
  getImagePath(value:string ){
    debugger
    let basePath="../../../../assets/images/Uploaded File/";
    return basePath+value;
    }
}
