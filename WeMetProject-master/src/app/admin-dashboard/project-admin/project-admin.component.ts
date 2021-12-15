import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDashboardService } from 'src/app/Service/admin-dashboard.service';

@Component({
  selector: 'app-project-admin',
  templateUrl: './project-admin.component.html',
  styleUrls: ['./project-admin.component.css']
})
export class ProjectAdminComponent implements OnInit {

  constructor(public adminDashboardService: AdminDashboardService,private router:Router) { }

  ngOnInit(): void {
  }
  downloadFile(filename :any){
    let basePath="../../../../assets/cv/Uploaded File/";
    const path:string=basePath+filename;
    let link = document.createElement("a");
    link.download = filename;
    link.href = path;
    link.click();
  }

  getImagePath(value:any ){
    let basePath="../../../../assets/images/Uploaded File/";
    if(value==null)
    return "../../../../assets/img/User.png";
    console.log(basePath);
    return basePath+value;
    }

  goToUser(id:any){
    this.adminDashboardService.getUserById(id);
    this.router.navigate(['admin/userProfile']);}

}
