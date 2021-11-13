import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
   color: ThemePalette = 'accent';
   mode: ProgressSpinnerMode = 'indeterminate';

   showLoader = false;
   showMessage = true;

    userName= new FormControl('', [Validators.required,Validators.minLength(5),Validators.maxLength(20)]);
    password= new FormControl('', [Validators.required,Validators.minLength(8)]);

    toggleShowMessage() {
    
      this.showMessage = !this.showMessage;
    }

    hide1 = true;

    GoToRegister(){
     this.router.navigate(['register']);

    }

    rememberMe: boolean;

    constructor(private router:Router,private spinner: NgxSpinnerService) { 
      this.rememberMe = false;
      this.AutoLogin();
  
     }
     AutoLogin(){
      const accessTokenObj = localStorage.getItem("token");
      const userName1 = localStorage.getItem("userName")+'';
      const pass = localStorage.getItem("password")+'';
  
      // Retrieve rememberMe value from local storage
      const rememberMe = localStorage.getItem('rememberMe');
      console.log(accessTokenObj);
      if (accessTokenObj && rememberMe == 'yes') {
        this.rememberMe = true;
        this.userName.setValue(userName1);
        this.password.setValue(pass);
  
      } 
     }
     
     onSubmit() {
      

      if(this.rememberMe){
        localStorage.setItem('token','accessToken');
        localStorage.setItem('userName', this.userName.value);
        localStorage.setItem('password', this.password.value);
        localStorage.setItem('rememberMe', 'yes')
      
      //   this.spinner.show();
      // setTimeout(() => {
      //   this.spinner.hide();
      //   this.router.navigate(['home']);
      // }, 5000);
      }
      
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
        this.router.navigate(['user/projects']);
      }, 3000);
        
        // this.router.navigate(['register']);
      
      }
     

  ngOnInit(): void {
  }
  

}