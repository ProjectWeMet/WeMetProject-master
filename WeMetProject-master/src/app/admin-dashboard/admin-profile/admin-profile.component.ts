import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AdminDashboardService } from 'src/app/Service/admin-dashboard.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  // @Input () userId:number|undefined;
  // @Input () email: string|undefined;

  // @Input () phoneNumber:string|undefined;

  // @Input () country:string|undefined;

  // @Input ()  biography:string|undefined;
 
  
  // @Input ()  skill:string|undefined;
  userId= new FormControl('', [Validators.required]);
  email=new FormControl('@example.com', [Validators.required]);
  phoneNumber=new FormControl('07########', [Validators.required]);
  country= new FormControl('Amman', [Validators.required]);
  biography=new FormControl('Exampllee', [Validators.required]);
  skill=new FormControl('Example', [Validators.required]);

  constructor(public adminDashboardService:AdminDashboardService) {
    this.adminDashboardService.GetProfileAdmin();
    // this.adminDashboardService.UpdateProFileAdmin();
   }


   saveItem(id:any){debugger
   
    // let fileToUpload = <File>this.image.value;
    const formData = new FormData();
    // formData.append('file', fileToUpload, fileToUpload.name);
   
    debugger
    const date={
      userId:id,
      email:(this.email.value).toString()   ,
      biography:(this.biography.value).toString(),
      skill:(this.skill.value).toString(),
      phoneNumber:(this.phoneNumber.value).toString(),
      country:(this.country.value).toString()   
    
      
     
    }
  
    // this.UserService.CreateApplyJob(dater);
    this.adminDashboardService.UpdateProFileAdmin(date);
    
  }
  ngOnInit(): void {
   
  }

}
