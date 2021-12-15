import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminDashboardService } from 'src/app/Service/admin-dashboard.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
 
  userId= new FormControl('', [Validators.required]);
  ProfileForm = new FormGroup({

  email:new FormControl('@example.com', [Validators.required]),
  phoneNumber:new FormControl('07########', [Validators.required]),
  country: new FormControl('Amman', [Validators.required]),
  biography:new FormControl('Exampllee', [Validators.required]),
  skill:new FormControl('Example', [Validators.required])})

  constructor(public adminDashboardService:AdminDashboardService) {
    this.adminDashboardService.GetProfileAdmin();
    // this.adminDashboardService.UpdateProFileAdmin();
   }


   saveItem(){debugger
   
    // let fileToUpload = <File>this.image.value;
    const formData = new FormData();
    // formData.append('file', fileToUpload, fileToUpload.name);
   
    debugger
    const date={
      userId:19,
      email:(this.ProfileForm.controls.email.value).toString()   ,
      biography:(this.ProfileForm.controls.biography.value).toString(),
      skill:(this.ProfileForm.controls.skill.value).toString(),
      phoneNumber:(this.ProfileForm.controls.phoneNumber.value).toString(),
      country:(this.ProfileForm.controls.country.value).toString()   
    
      
     
    }
  
    // this.UserService.CreateApplyJob(dater);
    this.adminDashboardService.UpdateProFileAdmin(date);
    
  }
  ngOnInit(): void {
   
  }

}
