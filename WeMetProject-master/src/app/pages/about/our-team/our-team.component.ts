import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagesService } from 'src/app/Service/pages.service';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {
  @Input () Name:string|undefined;
  @Input () Id:any|undefined;
  @Input () img:any|undefined;
  @Input () Description:string|undefined;
  @Input () Address:string|undefined;
  @Input () Email:string|undefined;
  constructor(public UserService:UserDashboardService ,private router:Router,public pagesService: PagesService) { }
  showProfile()
  {debugger
    if(this.Id)
    {
      this.pagesService.GetOurTeamById(this.Id);
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
