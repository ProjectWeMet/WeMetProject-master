import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.css']
})
export class MyWorkComponent implements OnInit {

  constructor(public UserService:UserDashboardService,private router:Router) { }

  goToPersonalInfo(){
    this.router.navigate(['user/profile']);
  }
  ngOnInit(): void {
  }

}
