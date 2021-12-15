import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDashboardService } from 'src/app/Service/admin-dashboard.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public adminDashboardService: AdminDashboardService,private router:Router) { }

  goToMyWork(id:number){
    debugger
    this.adminDashboardService.getMyWorkById(id);
    this.router.navigate(['admin/userWork']);
  }
  
  ngOnInit(): void {
    
  }
  goToMyBalance(id :number){
    this.adminDashboardService.GetBalanceById(id);
  this.router.navigate(['admin/userBalance']);
  }
  getImagePath(value:any ){
    let basePath="../../../../assets/images/Uploaded File/";
    if(value==null)
    return "../../../../assets/img/User.png";
    console.log(basePath);
    return basePath+value;
    }
    goToMyProject(id:any){
      this.adminDashboardService.getPublishedProjects(id);
      this.router.navigate(['admin/publishedProjects']);
    }
    
}
