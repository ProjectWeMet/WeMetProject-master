import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminDashboardService } from 'src/app/Service/admin-dashboard.service';

@Component({
  selector: 'app-createcategorey-dialog',
  templateUrl: './createcategorey-dialog.component.html',
  styleUrls: ['./createcategorey-dialog.component.css']
})
export class CreatecategoreyDialogComponent implements OnInit {

  image=new FormControl('', [Validators.required]);
  categoryTitle=new FormControl('', [Validators.required]);
  constructor(public adminDashboardService: AdminDashboardService,public dialog:MatDialog,@Inject(MAT_DIALOG_DATA) public data: any ) { }


  saveItemm(){debugger
   
    // let fileToUpload = <File>this.image.value;
    const formData = new FormData();
    // formData.append('file', fileToUpload, fileToUpload.name);
    debugger
    const date={
      image:(this.adminDashboardService.display_image2).toString()   ,
      categoryTitle:(this.categoryTitle.value).toString()
    }
  
    this.adminDashboardService.CreateCategorey(date);
  }
  uploadFile(files:any) {debugger
    if (files.length === 0) {
    return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    
    this.adminDashboardService.uploadAttachmentCreateCategorey(formData);

    }

    getImagePath(value:string ){
      debugger
      let basePath="../../../../assets/images/Uploaded File/";
      return basePath+value;
      }
  ngOnInit(): void {
  }

}
