import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { HomeServiceService } from 'src/app/Service/home-service.service';

@Component({
  selector: 'app-blogby-id',
  templateUrl: './blogby-id.component.html',
  styleUrls: ['./blogby-id.component.css']
})
export class BlogbyIdComponent implements OnInit {
  [x: string]: any;
  @Input () Title:string|undefined;
    @Input () Id:any|undefined;
    @Input () img:any|undefined;
    @Input () Description:string|undefined;
  constructor(public homeServiceService: HomeServiceService, private http: HttpClient) {
  
   }

 
  uploadFile(files:any,id:any) {debugger
    if (files.length === 0) {
    return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.homeServiceService.uploadAttachment(formData,id);
    }
    getImagePath(value:string ){
      let basePath="../../../../assets/images/Uploaded File/";
      return basePath+value;
      }
  ngOnInit(): void {
  }

}
