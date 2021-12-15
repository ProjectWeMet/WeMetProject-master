import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdminDashboardService } from 'src/app/Service/admin-dashboard.service';
import { HomeServiceService } from 'src/app/Service/home-service.service';

@Component({
  selector: 'app-edite-categorey-dialog',
  templateUrl: './edite-categorey-dialog.component.html',
  styleUrls: ['./edite-categorey-dialog.component.css']
})
export class EditeCategoreyDialogComponent implements OnInit {

  categoryId= new FormControl(this.data.categoryId, [Validators.required]);
  image=new FormControl(this.data.image, [Validators.required]);
  categoryTitle=new FormControl(this.data.categoryTitle, [Validators.required]);
  fileControl=new FormControl('',[Validators.required])

  
  constructor(public adminDashboardService: AdminDashboardService
    ,public homeServiceService: HomeServiceService,public dialog:MatDialog,private http:HttpClient,private spiner :NgxSpinnerService,private router:Router
    ,private toastr:ToastrService,@Inject(MAT_DIALOG_DATA) public data: any ) { 
     
      // this.homeServiceService.GetCategoreyById(this.categoreyId)
    }
  saveItem(){debugger
   
    // let fileToUpload = <File>this.image.value;
    // formData.append('file', fileToUpload, fileToUpload.name);
    if(this.formData!=null){
      const data1={
        categoryTitle:(this.categoryTitle.value).toString(),
        categoryId:this.categoryId.value
      }
      this.adminDashboardService.uploadAttachmentCategorey(this.formData,this.categoryId.value,this.categoryTitle.value);

    }
    else{
      const data1={
        image:this.data.image  ,
        categoryTitle:(this.categoryTitle.value).toString(),
        categoryId:this.categoryId.value
      }
      this.adminDashboardService.UpdateCategoreyAll(data1);

    }
    
    
  }


  close(){

  }
  
    imageSrc:any

  formData :any=null;
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
      let basePath="../../../../assets/images/Uploaded File/";
      return basePath+value;
      }
  ngOnInit(): void {
  }
}
