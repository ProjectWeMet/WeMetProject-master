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
  @Input () image:any;
  @Input () title:string|undefined;
  @Input () id:any|undefined;
  @Input () img:any|undefined;
  @Input () descriptions:string|undefined;
  constructor(public UserService:UserDashboardService,private router:Router,public homeServiceService:HomeServiceService) { 
  
    this.homeServiceService.getAllHighestProjects();
    this.homeServiceService.GetAllCategorey();
    this.homeServiceService.GetAllBLOG();
    this.homeServiceService.getAlltestimonial();
    
    
    
  }
 
  getImagePath(value:any ){
    let basePath="../../../../assets/images/Uploaded File/";
    if(value==null)
    return "../../../../assets/img/User.png";
    console.log(basePath);
    return basePath+value;
    }
    GoAllProject(){
      this.router.navigate(['Project']);
  
    }
    GoLogin(){
      this.router.navigate(['login']);
  
    }
    showDetailes(projectId:number){
      this.UserService.GetProjectById(projectId);
      this.router.navigate(['projectDetailes']);
    
  }
  ngOnInit(): void {
   
  }

}
