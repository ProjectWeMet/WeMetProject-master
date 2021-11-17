import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';

@Component({
  selector: 'app-add-my-workdialog',
  templateUrl: './add-my-workdialog.component.html',
  styleUrls: ['./add-my-workdialog.component.css']
})
export class AddMyWorkdialogComponent implements OnInit {
  imageSrc: any;
  formGroup =new FormGroup({
    title:new FormControl('',Validators.required),
    link:new FormControl('',Validators.required),
    Date:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    skills:new FormControl('',Validators.required),
    fileControl:new FormControl('',Validators.required)
  })
  constructor(public UserService:UserDashboardService,@Inject(MAT_DIALOG_DATA) public data: any) {
    // console.log(this.data.userID+"data"+this.data.idApply)
  }
     formData = new FormData();
  readURL(event:any): void {
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
      ImageName:''
    }
   
    this.UserService.uploadImageWork(this.formData,date);
    
  }
  close(){

  }

}
