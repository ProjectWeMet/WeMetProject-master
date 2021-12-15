import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  constructor(private router:Router,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  GoTologin(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      localStorage.clear()
      this.router.navigate(['']);
    }, 2000);
   
   
  }
}
