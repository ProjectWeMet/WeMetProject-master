import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdminDashboardService } from './admin-dashboard.service';
import { UserDashboardService } from './user-dashboard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public UserService:UserDashboardService,private adminDashboardService:AdminDashboardService,private spinner: NgxSpinnerService,private router:Router,private http:HttpClient,private toastr:ToastrService) {
      
   }


  login(body:any){
    var responce1:any;
    
    const headerDict={
      'Content-Type':'application/json',
      'Accept':'application/json'
    }
    const requestOptions={
      headers:new HttpHeaders(headerDict)
    }
    console.log(body);
      this.spinner.show();
      debugger
      this.http.post('https://localhost:44374/api/Jwt/login',body,requestOptions).subscribe((res:any)=>{
        this.spinner.hide()
        responce1=res;
        const responce={
          token:responce1.toString()};
          localStorage.setItem('token',responce.token);
          let data:any=jwtDecode(responce.token);//username: rolename
          console.log(data);
          this.getSissionId(data.unique_name);
          debugger
          //var str=JSON.stringify({...data});
       localStorage.setItem('user',JSON.stringify({...data}));
         if(data.role=='Admin'){
           this.router.navigate(['admin/dash']);
           this.adminDashboardService.ChartProfit();

         }
         else if(data.role=='User'){
           this.router.navigate(['user/user']);
         }
        }
        ,error=>{
          this.spinner.hide();
          this.toastr.error('Invalid username or password');
          
          })
          
    }


    Register(data:any){debugger
      const headerDict={
        'Content-Type':'application/json',
        'Accept':'application/json'
      }
      const requestOptions={
        headers:new HttpHeaders(headerDict)
      }
      this.spinner.show();
       this.http.post('https://localhost:44374/api/Users/Register',data,requestOptions)
       .subscribe((data:any)=>{
        this.spinner.hide();
        this.toastr.success('Successfully registered ');
     
      },error=>{
        this.spinner.hide();
        // this.toastr.error(' Not Deleted ');
     
      })
    }

    getSissionId(userName:any){
      const data2={
        userName:userName.toString()
      }
      const headerDict={
        'Content-Type':'application/json',
        'Accept':'application/json'
      }
      const requestOptions={
        headers:new HttpHeaders(headerDict)
      }
  
      this.spinner.show();
     this.http.post('https://localhost:44374/api/Users/GetIdSession',data2,requestOptions)
     .subscribe((data:any)=>{
      this.spinner.hide();
      this.UserService.UserId=data.userId;
    },error=>{
      this.spinner.hide();
      // this.toastr.error(' Not Deleted ');
  
    }
    
    )
    }
}

