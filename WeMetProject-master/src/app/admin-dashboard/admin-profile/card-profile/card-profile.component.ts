import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
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

  uploadFile(files:any,id:any) {debugger
    if (files.length === 0) {
    return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.adminDashboardService.uploadAttachment(formData,id);
    }
    getImagePath(value:string ){
      let basePath="../../../../assets/images/Uploaded File/";
      return basePath+value;
      }
  ngOnInit(): void {
  }
}
