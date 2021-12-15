import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AdminDashboardService } from 'src/app/Service/admin-dashboard.service';


@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.css']
})
export class CardProfileComponent implements OnInit {
  @Input() fname :string='N/A'
  @Input() lname :string |undefined
  @Input() email :string ='N/A'
  @Input() biography :string ='N/A'
  @Input() imageName :any |undefined
  @Input() skill :string ='N/A'
  @Input () country:string ='N/A'
  @Input () phoneNumber:string ='N/A'

 constructor(public adminDashboardService:AdminDashboardService,private http:HttpClient) {

  }
  fileControl= new FormControl("", [Validators.required]);

  formData:any=null;
  imageSrc:any;

  uploadFile() {debugger
    
    this.adminDashboardService.uploadAttachment(this.formData);
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
    getImagePath(value:string ){
      let basePath="../../../../assets/images/Uploaded File/";
      return basePath+value;
      }
  ngOnInit(): void {
  }
}
