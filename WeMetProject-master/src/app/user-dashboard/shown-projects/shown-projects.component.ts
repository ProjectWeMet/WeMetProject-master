import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(public UserService:UserDashboardService,private router:Router) {
    this.UserService.getUserById(this.UserService.UserId);
    this.UserService.GetUserProjectById(this.UserService.UserId);
  }

  ngOnInit(): void {
  }
  goToMyTestmonial(id:any){
    this.UserService.GetProjectById(id);
    this.router.navigate(['user/testmonial']);
  }
  goToMySchedule(id:number){
    debugger
    this.UserService.getAllSchedule(id);
    this.router.navigate(['user/mySchedule']);
    
  }
  goToMyWork(id:number){
    debugger
    this.UserService.getMyWorkById(id);
    this.router.navigate(['user/myWorkProfile']);

  }
  EditInfo(){
    if(this.UserService.UserId){
      this.UserService.getUserById(this.UserService.UserId);
      this.router.navigate(['user/editInfo']);
    }
  }
  goToinfo(id:number){
    this.UserService.getUserById(id);
    this.router.navigate(['user/myProfile']);
  }
  getImagePath(value:any ){
    let basePath="../../../../assets/images/Uploaded File/";
    if(value==null)
    return "../../../../assets/img/User.png";
    console.log(basePath);
    return basePath+value;
    }
    goToMyProject(id:any){
      this.UserService.GetUserProjectById(id);
    this.router.navigate(['user/ShownProjects']);
    }
    search(selectedState:any){
      this.radioChange(selectedState)
    this.UserService.SearchUserProject(this.date);
  }
  goToMyBalance(id :number){
    this.UserService.GetBalanceById(id);
  this.router.navigate(['user/balance']);
  }
  radioChange(selectedState:any){debugger
    switch(selectedState){
       
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
