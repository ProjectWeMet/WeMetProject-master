import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeServiceService } from 'src/app/Service/home-service.service';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Input () title:string|undefined;
  @Input () id:any|undefined;
  @Input () img:any|undefined;
  @Input () descriptions:string|undefined;
  constructor(public UserService:UserDashboardService ,private router:Router,public homeServiceService: HomeServiceService) { }
  showProfile()
  {debugger
    if(this.id)
    {
      this.homeServiceService.GetBLOGById(this.id);
      this.router.navigate(['home/BlogId']);
      // this.openProfile.emit();
    }
    else{
      // this.toastr.warning('This item cannot be loded!!')
    }
  }
  // uploadFile(files:any) {debugger
  //   if (files.length === 0) {
  //   return;
  //   }
  //   let fileToUpload = <File>files[0];
  //   const formData = new FormData();
  //   formData.append('file', fileToUpload, fileToUpload.name);
  //   this.homeServiceService.uploadAttachment(formData);
  //   }
    getImagePath(value:string ){
      debugger
      let basePath="../../../../assets/images/Uploaded File/";
      return basePath+value;
      }
  ngOnInit(): void {
  }

}
