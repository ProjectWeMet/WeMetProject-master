import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminDashboardService } from 'src/app/Service/admin-dashboard.service';

@Component({
  selector: 'app-about-admin',
  templateUrl: './about-admin.component.html',
  styleUrls: ['./about-admin.component.css']
})
export class AboutAdminComponent implements OnInit {
  AboutForm = new FormGroup({

    phone:new FormControl('', [Validators.required]),
    
    descriptions:new FormControl('', [Validators.required]),
    email:new FormControl('', [Validators.required]),
  Address:new FormControl('', [Validators.required])})

  img= new FormControl('', [Validators.required])
  formData :any=null;

  imageSrc:any;

  constructor(public adminDashboardService:AdminDashboardService) {
    // this.adminDashboardService.GetProfileAdmin();
    this.adminDashboardService.GetAllAboutAs();
    
   }
   getImagePath(value:any ){
    let basePath="../../../../assets/images/Uploaded File/";
    if(value==null)
    return "../../../../assets/img/User.png";
    console.log(basePath);
    return basePath+value;
    }
   saveItem(id:any){
     
     if(this.formData==null){
      const data={
        id:1,
        phone:this.AboutForm.controls.phone.value,
        descriptions:this.AboutForm.controls.descriptions.value.toString(),
        email:this.AboutForm.controls.email.value.toString(),
        address:this.AboutForm.controls.Address.value.toString(),
        logo:this.adminDashboardService.allAbout[0].logo
       }
      this.adminDashboardService.updateAboutAs(data)

     }
     else{
      const data={
        id:1,
        phone:this.AboutForm.controls.phone.value,
        descriptions:this.AboutForm.controls.descriptions.value.toString(),
        email:this.AboutForm.controls.email.value.toString(),
        address:this.AboutForm.controls.Address.value.toString(),
       }
       this.adminDashboardService.UpdateAboutAdmin(this.formData,data)

     }
   }
   readURL(event:any): void {
    this.formData=new FormData();
    if (event.target?.files && event.target.files[0]) {
        const file = event.target.files[0];
        let fileToUpload = <File>event.target.files[0];
        this.formData.append('file', fileToUpload, fileToUpload.name);
        const reader = new FileReader();
        reader.onload = e => this.imageSrc = reader.result;
        reader.readAsDataURL(file);
    }
}
  ngOnInit(): void {
  }

}
