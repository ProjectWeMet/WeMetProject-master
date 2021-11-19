import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  constructor(private router:Router,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }
  goToHome(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['']);
    }, 1000);
   
  }
  GoToRegister(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['register']);
    }, 1000);
   
  }

  goToProject(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['user/projects']);
    }, 1000);
   
  }

  GoToUser(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['user/user']);
    }, 1000);
   
  }

  GoTologin(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['']);
    }, 1000);
   
  }
  GoToMyProject(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['user/publishedProjects']);
    }, 1000);
   
  }

  GoToAddProject(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['user/addproject']);
    }, 1000);
   
   
  }

  goToMyProfile(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['user/myProfile']);
    }, 1000);
   
  }
  GoToSchedule(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['user/schedule']);
    }, 1000);
   
  }
  GoToLogin(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['login']);
    }, 1000);
   
  }

}
