import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';

@Component({
  selector: 'app-recharge-dialog',
  templateUrl: './recharge-dialog.component.html',
  styleUrls: ['./recharge-dialog.component.css']
})
export class RechargeDialogComponent implements OnInit {

  formGroup =new FormGroup({
    Amount:new FormControl('',Validators.required),
    CardName:new FormControl('',Validators.required),
    CardNumber:new FormControl('',Validators.required),
    SecurityCode:new FormControl('',Validators.required),
    ExpirationDate:new FormControl('',Validators.required),
  })
  constructor(public UserService:UserDashboardService,@Inject(MAT_DIALOG_DATA) public data: any) {
    // console.log(this.data.userID+"data"+this.data.idApply)
  }
  saveItem(){
    const data={
      userId:this.UserService.UserId,
      availableBalance:parseInt(this.formGroup.controls.Amount.value) 
    }
    this.UserService.UpdateBalance(data);
  }
  ngOnInit(): void {
  }

}
