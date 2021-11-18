import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  constructor(public UserService:UserDashboardService,private router:Router) { }


  goToMyWork(id:number){
    debugger
    this.UserService.getMyWorkById(id);
    this.router.navigate(['user/myWork']);
  }
  ngOnInit(): void {
    
  }
  getImagePath(value:string ){
    let basePath="../../../../assets/images/Uploaded File/";
    return basePath+value;
    }

  hireMe(){
    this.UserService.getUserById(this.UserService.User[0].userId);
    this.router.navigate(['user/addJopOffer']);}
    

}
