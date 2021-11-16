import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';

@Component({
  selector: 'app-edit-my-work-dialog',
  templateUrl: './edit-my-work-dialog.component.html',
  styleUrls: ['./edit-my-work-dialog.component.css']
})
export class EditMyWorkDialogComponent implements OnInit {
  constructor(public UserService:UserDashboardService,@Inject(MAT_DIALOG_DATA) public data: any) {
    // console.log(this.data.userID+"data"+this.data.idApply)
  }
  imageSrc: any;
  formGroup =new FormGroup({
    title:new FormControl(this.data.title,Validators.required),
    link:new FormControl(this.data.link,Validators.required),
    Date:new FormControl(this.data.completionDate,Validators.required),
    description:new FormControl(this.data.description,Validators.required),
    skills:new FormControl(this.data.skill,Validators.required),
    fileControl:new FormControl(this.data.imageName,Validators.required)
  })
  
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
  ngOnInit(): void {
  }
  saveItem(){debugger
   
  
    const date={
      link:(this.formGroup.controls.link.value).toString(),
      CompletionDate:(this.formGroup.controls.Date.value).toString(),
      description:(this.formGroup.controls.description.value).toString(),
      titel:(this.formGroup.controls.title.value).toString(),
      userId:this.data.userID,
      skill:(this.formGroup.controls.skills.value).toString(),
      ImageName:this.data.imageName,
      myWorkId:this.data.myWorkId
    }
   if(this.formData!=null){
    this.UserService.uploadEditImageWork(this.formData,date);

   }else{
    this.UserService.EditWork(date);

   }
    
  }
  getImagePath(value:string ){
    let basePath="../../../../assets/images/Uploaded File/";
    return basePath+value;
    }
  close(){

  }
}
