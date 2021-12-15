import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';

@Component({
  selector: 'app-home-project-detailes',
  templateUrl: './home-project-detailes.component.html',
  styleUrls: ['./home-project-detailes.component.css']
})
export class HomeProjectDetailesComponent implements OnInit {

  constructor(public UserService:UserDashboardService,private router:Router) { 
    // this.UserService.getApplyJobByProject(this.UserService.projectDetaile[0].projectId);
    // this.UserService.getUserById(this.UserService.UserId)

  }
  goToUser(id:any){
debugger
    this.UserService.getUserById(id);
    this.router.navigate(['profile']);
  }  
    getImagePath(value:any ){
  
      let basePath="../../../../assets/images/Uploaded File/";
      if(value==null)
      return "../../../../assets/img/User.png";
      console.log(basePath);
      return basePath+value;
      }
      GoToLogin() {
        this.router.navigate(['login']);

}
GoToRegister() {
  this.router.navigate(['login/register']);

}
downloadFile(filename :any){
  let basePath="../../../../assets/cv/Uploaded File/";
  const path:string=basePath+filename;
  let link = document.createElement("a");
  link.download = filename;
  link.href = path;
  link.click();
}

  ngOnInit(): void {
  }

}
