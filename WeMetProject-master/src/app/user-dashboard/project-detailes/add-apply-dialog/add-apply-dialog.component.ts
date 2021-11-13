import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';

@Component({
  selector: 'app-add-apply-dialog',
  templateUrl: './add-apply-dialog.component.html',
  styleUrls: ['./add-apply-dialog.component.css']
})
export class AddApplyDialogComponent implements OnInit {
  formGroup =new FormGroup({
    term:new FormControl('',Validators.required),
    Budget:new FormControl('',Validators.required),
    Details:new FormControl('',Validators.required),
    fileControl:new FormControl('',Validators.required)
  })
  constructor(public UserService:UserDashboardService) {
    this.UserService.GetProjectById(this.UserService.projectDetaile[0].projectId);
    console.log(this.UserService.projectDetaile[0].projectId)

   }

  ngOnInit(): void {
    // this.UserService.GetProjectById(this.UserService.projectDetaile[0].projectId);

  }
  uploadFile(){

  }
  saveItem(){debugger
   
    let fileToUpload = <File>this.formGroup.controls.fileControl.value;
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    const date={
      deliveryTerm:(this.formGroup.controls.term.value).toString(),
      offerValue:(this.formGroup.controls.Budget.value).toString(),
      offerDetails:(this.formGroup.controls.Details.value).toString(),
      userId:this.UserService.UserId,
      projectId:this.UserService.projectDetaile[0].projectId,
    }
    this.UserService.uploadAttachment(formData,date);
    // this.UserService.CreateApplyJob(dater);
    
  }
  close(){

  }
}
