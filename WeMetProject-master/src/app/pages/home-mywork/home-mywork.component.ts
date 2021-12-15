import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';

@Component({
  selector: 'app-home-mywork',
  templateUrl: './home-mywork.component.html',
  styleUrls: ['./home-mywork.component.css']
})
export class HomeMyworkComponent implements OnInit {

  constructor(public UserService:UserDashboardService,private router:Router) { }
  getImagePath(value:any ){
    let basePath="../../../../assets/images/Uploaded File/";
    if(value==null)
    return "../../../../assets/img/User.png";
    console.log(basePath);
    return basePath+value;
    }

    hireMe(){
      this.router.navigate(['login']);}

    goToProfile(id:any){
      this.UserService.getUserById(this.UserService.User[0].userId);
    this.router.navigate(['profile']);}
  ngOnInit(): void {
  }

}
