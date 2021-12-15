import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDashboardService } from 'src/app/Service/admin-dashboard.service';

@Component({
  selector: 'app-user-work',
  templateUrl: './user-work.component.html',
  styleUrls: ['./user-work.component.css']
})
export class UserWorkComponent implements OnInit {

  constructor(public adminDashboardService: AdminDashboardService,private router:Router) { }

  goToMyWork(id:number){
    debugger
    // this.UserService.getMyWorkById(id);
    // this.router.navigate(['user/myWork']);
  }
  getImagePath(value:any ){
    let basePath="../../../../assets/images/Uploaded File/";
    if(value==null)
    return "../../../../assets/img/User.png";
    console.log(basePath);
    return basePath+value;
    }
    goToProfile(id:any){
      this.adminDashboardService.getUserById(id);
      this.router.navigate(['admin/userProfile']);}
    goToMyBalance(id :number){
      this.adminDashboardService.GetBalanceById(id);
    this.router.navigate(['admin/userBalance']);
    }
    
  ngOnInit(): void {
  }
  goToMyProject(id:any){
    this.adminDashboardService.getPublishedProjects(id);
    this.router.navigate(['admin/publishedProjects']);
  }
}
