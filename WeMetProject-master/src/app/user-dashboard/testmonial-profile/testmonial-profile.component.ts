import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSliderChange } from '@angular/material/slider';
import { Router } from '@angular/router';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';

@Component({
  selector: 'app-testmonial-profile',
  templateUrl: './testmonial-profile.component.html',
  styleUrls: ['./testmonial-profile.component.css']
})
export class TestmonialProfileComponent implements OnInit {
  value2:any=1;
  
   NumberStar= new FormControl('', [Validators.required]);
    Comment=new FormControl('', [Validators.required]);
  constructor(public UserService:UserDashboardService,private router:Router) {
    
   }
   
   formatLabel(value2: number) {
    return value2;
  }
  
onInputChange(event: MatSliderChange) {
  this.value2=event.value
}
  getImagePath(value:any ){
    let basePath="../../../../assets/images/Uploaded File/";
    if(value==null)
    return "../../../../assets/img/User.png";
    console.log(basePath);
    return basePath+value;
    }

    goToMyWork(id:number){
      debugger
      this.UserService.getMyWorkById(id);
      this.router.navigate(['user/myWorkProfile']);
    }

    goToMySchedule(id:number){
      debugger
      this.UserService.getAllSchedule(id);
      this.router.navigate(['user/mySchedule']);
      
    }
    goToMyProject(id:any){
      this.UserService.getAllSchedule(id);
    this.router.navigate(['user/ShownProjects']);
    }
    EditInfo(){
      if(this.UserService.UserId){
        this.UserService.getUserById(this.UserService.UserId);
        this.router.navigate(['user/editInfo']);
      }}

      goToinfo(id:number){
        this.UserService.getUserById(id);
        this.router.navigate(['user/myProfile']);
      }
      GoToProject(id:any){
        this.UserService.GetProjectById(id);
        this.router.navigate(['user/projectDetailes']);
      }
      goToMyTestmonial(id:any){
        this.UserService.GetProjectById(id);
        this.router.navigate(['user/testmonial']);
      }
      onClick(){
        const data2={
          userId:this.UserService.UserId,
          comment:this.Comment.value.toString(),
          numberStar:this.value2,
         
        
        }
        this.UserService.createTestmonial(data2);
      }
  ngOnInit(): void {
  }

}
