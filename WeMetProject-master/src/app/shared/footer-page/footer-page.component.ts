import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HomeServiceService } from 'src/app/Service/home-service.service';

@Component({
  selector: 'app-footer-page',
  templateUrl: './footer-page.component.html',
  styleUrls: ['./footer-page.component.css']
})
export class FooterPageComponent implements OnInit {

  constructor(private router:Router,private spinner: NgxSpinnerService,public home:HomeServiceService) {
    this.home.GetAllAboutAs();
   }
  GoToContact(){
    this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
        this.router.navigate(['contact']);
      }, 2000);
    
  }
  GoToHome(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['']);
    }, 2000);
   
  }
  
  GoTologin(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      localStorage.clear();
      this.router.navigate(['login']);
    }, 2000);
   
   
  }
  GoToAbout(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['about']);
    }, 2000);
    
  }
  GoToRegister(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['register']);
    }, 2000);
   
  }
  goToProject(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['Project']);
    }, 1000);
   
  }

  GoToUser(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['User']);
    }, 1000);
   
  }

  ngOnInit(): void {
  }

}
