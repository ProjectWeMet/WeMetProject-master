import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { HomeServiceService } from 'src/app/Service/home-service.service';

@Component({
  selector: 'app-show-categorey-by-id',
  templateUrl: './show-categorey-by-id.component.html',
  styleUrls: ['./show-categorey-by-id.component.css']
})
export class ShowCategoreyByIdComponent implements OnInit {

  @Input () categoryTitle:string|undefined;
  @Input () categoryId:any|undefined;
  @Input () image:any|undefined;
  constructor(public homeServiceService: HomeServiceService, private http: HttpClient) { 
    // this.homeServiceService.GetCategoreyById(this.categoryId);
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
