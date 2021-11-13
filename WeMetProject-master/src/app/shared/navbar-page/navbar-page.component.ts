import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-navbar-page',
  templateUrl: './navbar-page.component.html',
  styleUrls: ['./navbar-page.component.css']
})
export class NavbarPageComponent implements OnInit {

  constructor(private router:Router,private spinner: NgxSpinnerService) { }
  GoToContact(){
    this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
        this.router.navigate(['home/contact']);
      }, 2000);
    
  }
  GoToHome(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['home']);
    }, 2000);
   
  }
  
  GoTologin(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['']);
    }, 2000);
   
   
  }
  GoToAbout(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['home/about']);
    }, 2000);
    
  }
  GoToRegister(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['register']);
    }, 2000);
   
  }
  
  ngOnInit(): void {
  }

}
