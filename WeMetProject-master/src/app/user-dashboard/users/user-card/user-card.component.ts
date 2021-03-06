import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input () userId:number|undefined;
  @Input () email: string|undefined;
  @Input () fname: string|undefined;
  @Input () lname: string|undefined;
  @Input () phoneNumber:string|undefined;
  @Input () dob: string|undefined;
  @Input () country:string|undefined;
  @Input () specialization:string|undefined;
  @Input ()  biography:string|undefined;
  @Input ()  imageName:string|undefined;
  @Input ()  userName:string|undefined;
  @Input ()  password:string|undefined;
  @Input ()  roleNameId: number|undefined;
  @Input ()  jobTitle:string|undefined;
  @Input ()  isActive:boolean|undefined;
  @Input ()  skill:string|undefined;
  @Input ()  createDate: string|undefined;
  @Input ()  verification: number|undefined;
  
  @Output() openProfile = new EventEmitter();

  showProfile()
  {debugger
    if(this.userId)
    {
      this.UserService.getUserById(this.userId);
      this.router.navigate(['user/profile']);
      // this.openProfile.emit();
    }
    else{
      // this.toastr.warning('This item cannot be loded!!')
    }
  }

  hireMe(){
    if(this.userId){
    this.UserService.getUserById(this.userId);
    this.router.navigate(['user/addJopOffer']);
    }
  }
  getImagePath(value:any ){
    let basePath="../../../../assets/images/Uploaded File/";
    if(value==null)
    return "../../../../assets/img/User.png";
    console.log(basePath);
    return basePath+value;
    }
    
  constructor(public UserService:UserDashboardService,private router:Router) { }

  ngOnInit(): void {
  }

}
