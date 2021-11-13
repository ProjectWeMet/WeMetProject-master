import { Component, Input, OnInit } from '@angular/core';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';
import { Router } from '@angular/router';
import { HomeServiceService } from 'src/app/Service/home-service.service';

@Component({
  selector: 'app-department-we-met',
  templateUrl: './department-we-met.component.html',
  styleUrls: ['./department-we-met.component.css']
})
export class DepartmentWeMetComponent implements OnInit {
  @Input () categoryId:number|undefined;
  @Input () image:any|undefined;
  @Input ()  categoryTitle :string|undefined;
 
  constructor(public UserService:UserDashboardService ,private router:Router,public homeServiceService: HomeServiceService) { }
  showProfile()
  {debugger
    if(this.categoryId)
    {
      this.homeServiceService.GetCategoreyById(this.categoryId);
      this.router.navigate(['home/show']);
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
