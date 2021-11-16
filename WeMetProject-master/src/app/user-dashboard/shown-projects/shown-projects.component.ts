import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';

@Component({
  selector: 'app-shown-projects',
  templateUrl: './shown-projects.component.html',
  styleUrls: ['./shown-projects.component.css']
})
export class ShownProjectsComponent implements OnInit {
  selectedState:string="";
  date:any={};
  stateProject:any=[
    
    'Complete' ,
    'Execution',
    
    'All'
];
  title=new FormControl("");
  constructor(public UserService:UserDashboardService) {
    this.UserService.getUserById(this.UserService.UserId);
    this.UserService.GetUserProjectById(this.UserService.UserId);
  }

  ngOnInit(): void {
  }
  search(){
    this.radioChange();
    this.UserService.SearchUserProject(this.date);
  }
  radioChange(){debugger
    switch(this.selectedState){
       
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
