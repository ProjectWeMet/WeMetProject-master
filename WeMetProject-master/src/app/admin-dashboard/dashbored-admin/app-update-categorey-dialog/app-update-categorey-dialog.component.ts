import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomeServiceService } from 'src/app/Service/home-service.service';

@Component({
  selector: 'app-app-update-categorey-dialog',
  templateUrl: './app-update-categorey-dialog.component.html',
  styleUrls: ['./app-update-categorey-dialog.component.css']
})
export class AppUpdateCategoreyDialogComponent implements OnInit {
  categoreyId:any
  formGroup =new FormGroup({
    categoryId:new FormControl(this.data.categoryId,Validators.required),
    image:new FormControl(this.data.image,Validators.required),
    categoryTitle:new FormControl(this.data.categoryTitle,Validators.required),
  })
  constructor(public homeServiceService: HomeServiceService,public dialog:MatDialog,private http:HttpClient,private spiner :NgxSpinnerService,private router:Router
    ,private toastr:ToastrService,@Inject(MAT_DIALOG_DATA) public data: any ) { 
      // this.homeServiceService.GetCategoreyById(this.categoreyId)
    }
  saveItem(){debugger
   
    let fileToUpload = <File>this.formGroup.controls.fileControl.value;
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    const date={
      image:(this.formGroup.controls.image.value).toString(),
      categoryTitle:(this.formGroup.controls.categoryTitle.value).toString(),
      categoryId:this.categoreyId,
    }
    this.homeServiceService.uploadAttachmentt(formData,date);
    // this.UserService.CreateApplyJob(dater);
    
  }
  close(){

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
      debugger
      let basePath="../../../../assets/images/Uploaded File/";
      return basePath+value;
      }
  ngOnInit(): void {
  }

}
