import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminDashboardService } from 'src/app/Service/admin-dashboard.service';

@Component({
  selector: 'app-user-published-projects',
  templateUrl: './user-published-projects.component.html',
  styleUrls: ['./user-published-projects.component.css']
})
export class UserPublishedProjectsComponent implements OnInit {
  selectedState:string="";
  date:any={};
  stateProject:any=[
    'Open' ,
    'Complete' ,
    'Execution',
    'Processing',
    'All'
];
  title=new FormControl("");

  constructor(public adminDashboardService: AdminDashboardService,private router:Router) { }

  goToMyWork(id:number){
    debugger
    this.adminDashboardService.getMyWorkById(id);
    this.router.navigate(['admin/userWork']);
  }
  
  ngOnInit(): void {
    
  }
  goProject(id:any){
    this.adminDashboardService.GetProjectById(id);
    this.router.navigate(['admin/projects']);
  }
  goToMyProject(id:any){
    this.adminDashboardService.getPublishedProjects(id);
    this.router.navigate(['admin/publishedProjects']);
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
  search(selectedState:any){
    this.radioChange(selectedState)

    this.adminDashboardService.SearchPublishedProject(this.date);
  }
  radioChange(selectedState:any){debugger
    switch(selectedState){
      case "Open":
        this.date={
          userId: this.adminDashboardService.User[0].userId,
          ProjectTitle:this.title.value,
          isAccept: null,
          isOpen: false,
          isComplete: null,
          isExecution:null     
        }
          break; 
      case "Complete":
        this.date={
          userId: this.adminDashboardService.User[0].userId,
          ProjectTitle:this.title.value,
          isAccept: null,
          isOpen: null,
          isComplete: true,
          isExecution:null     
        }
        break; 
      case "Execution":
        this.date={
          userId: this.adminDashboardService.User[0].userId,
          ProjectTitle:this.title.value,
          isAccept: null,
          isOpen: null,
          isComplete: null,
          isExecution:true     
        }
        break;  
      case "Processing":
        this.date={
          userId: this.adminDashboardService.User[0].userId,
          ProjectTitle:this.title.value,
          isAccept: false,
          isOpen: null,
          isComplete: null,
          isExecution:null     
        }
          break;
      
      default:
        this.date={
          userId: this.adminDashboardService.User[0].userId,
          ProjectTitle:this.title.value,
          isAccept: null,
          isOpen: null,
          isComplete: null,
          isExecution:null     
        }

    }
  }
}
