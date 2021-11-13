import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';

@Component({
  selector: 'app-published-projects',
  templateUrl: './published-projects.component.html',
  styleUrls: ['./published-projects.component.css']
})
export class PublishedProjectsComponent implements OnInit {

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

  constructor(public UserService:UserDashboardService) {
    this.UserService.getPublishedProjects(this.UserService.UserId);
   }

  ngOnInit(): void {
  }
  search(){
    this.radioChange();
    this.UserService.SearchPublishedProject(this.date);
  }
  radioChange(){debugger
    switch(this.selectedState){
      case "Open":
        this.date={
          userId: this.UserService.UserId,
          ProjectTitle:this.title.value,
          isAccept: null,
          isOpen: false,
          isComplete: null,
          isExecution:null     
        }
         break; 
      case "Complete":
        this.date={
          userId: this.UserService.UserId,
          ProjectTitle:this.title.value,
          isAccept: null,
          isOpen: null,
          isComplete: true,
          isExecution:null     
        }
       break; 
      case "Execution":
        this.date={
          userId: this.UserService.UserId,
          ProjectTitle:this.title.value,
          isAccept: null,
          isOpen: null,
          isComplete: null,
          isExecution:true     
        }
        break;  
      case "Processing":
        this.date={
          userId: this.UserService.UserId,
          ProjectTitle:this.title.value,
          isAccept: false,
          isOpen: null,
          isComplete: null,
          isExecution:null     
        }
          break;
      case "All":
        this.date={
          userId: this.UserService.UserId,
          ProjectTitle:this.title.value,
          isAccept: null,
          isOpen: null,
          isComplete: null,
          isExecution:null     
        }
          break;
      default:
        this.date={
          userId: this.UserService.UserId,
          ProjectTitle:this.title.value,
          isAccept: null,
          isOpen: null,
          isComplete: null,
          isExecution:null     
        }

    }
    
  }
}
