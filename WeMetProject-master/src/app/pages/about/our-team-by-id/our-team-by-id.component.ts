import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { PagesService } from 'src/app/Service/pages.service';

@Component({
  selector: 'app-our-team-by-id',
  templateUrl: './our-team-by-id.component.html',
  styleUrls: ['./our-team-by-id.component.css']
})
export class OurTeamByIdComponent implements OnInit {
  @Input () Name:string|undefined;
  @Input () Id:any|undefined;
  @Input () img:any|undefined;
  @Input () Description:string|undefined;
  @Input () Address:string|undefined;
  @Input () Email:string|undefined;
  
  constructor(public pagesService: PagesService, private http: HttpClient) { }
  uploadFile(files:any,id:any) {debugger
    if (files.length === 0) {
    return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.pagesService.uploadAttachment(formData,id);
    }
    getImagePath(value:string ){
      let basePath="../../../../assets/images/Uploaded File/";
      return basePath+value;
      }
  ngOnInit(): void {
  }

}
