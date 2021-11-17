import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdminDashboardService } from 'src/app/Service/admin-dashboard.service';
import { HomeServiceService } from 'src/app/Service/home-service.service';

@Component({
  selector: 'app-app-update-categorey-dialog',
  templateUrl: './app-update-categorey-dialog.component.html',
  styleUrls: ['./app-update-categorey-dialog.component.css']
})
export class AppUpdateCategoreyDialogComponent implements OnInit {
  categoreyIdd:any
  // formGroup =new FormGroup({
  //   categoryId:new FormControl(this.data.categoryId,Validators.required),
  //   image:new FormControl(this.data.image,Validators.required),
  //   categoryTitle:new FormControl(this.data.categoryTitle,Validators.required),
  // })
  categoryId= new FormControl(this.data.categoryId, [Validators.required]);
  image=new FormControl(this.data.image, [Validators.required]);
  categoryTitle=new FormControl(this.data.categoryTitle, [Validators.required]);
  fileControl=new FormControl('',[Validators.required])

  
  constructor(public adminDashboardService: AdminDashboardService,public homeServiceService: HomeServiceService,public dialog:MatDialog,private http:HttpClient,private spiner :NgxSpinnerService,private router:Router
    ,private toastr:ToastrService,@Inject(MAT_DIALOG_DATA) public data: any ) { 
      // this.homeServiceService.GetCategoreyById(this.categoreyId)
    }
  saveItem(){debugger
   
    // let fileToUpload = <File>this.image.value;
    const formData = new FormData();
    // formData.append('file', fileToUpload, fileToUpload.name);
   
    debugger
    const date={
      image:(this.adminDashboardService.display_image).toString()   ,
      categoryTitle:(this.categoryTitle.value).toString()||this.data.categoryTitle,
      categoryId:this.categoryId.value
    }
  
    // this.UserService.CreateApplyJob(dater);
    this.adminDashboardService.UpdateCategoreyAll(date);
    
  }


  close(){

  }
  uploadFile(files:any,id:any,categoryTitle:any) {debugger
    if (files.length === 0) {
    return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    
    this.adminDashboardService.uploadAttachmentCategorey(formData,id,categoryTitle);
    this.saveItem();
    }
    formData =new FormData();
    imageSrc:any
    readURL(event:any): void {
      this.formData = new FormData();
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
      debugger
      let basePath="../../../../assets/images/Uploaded File/";
      return basePath+value;
      }
  ngOnInit(): void {
  }

}
