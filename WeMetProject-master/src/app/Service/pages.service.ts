import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
 // OurTeam
 allOurTeam : any =[{
}] 
display_image:any
OurTeam:any={}
  aboutUs: any=[];
  constructor(private http:HttpClient,private toaster:ToastrService,private router:Router , private spinner: NgxSpinnerService) { }

  
  GetAllOurTeam(){
    //call services
    return this.http.get('https://localhost:44374/api/OurTeam').subscribe((result)=> { 
   this.allOurTeam=result,
   this.spinner.hide();
   this.toaster.success('Data Retrieved!'); },
   (error) => this.toaster.error(error.status));
  
    }
     
  GetOurTeamById(id:number){
    debugger
    this.spinner.show();
    this.http.get('https://localhost:44374/api/OurTeam/GetOurTeamById/'+id).subscribe((data:any)=>{
      debugger
      this.OurTeam=data;
      console.log(this.OurTeam);
      this.spinner.hide();
      this.toaster.success('Data Retrieved!'); 
    },(error) => this.toaster.error(error.status));
  }
  contcat(data3:any){
    debugger
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
      const requestOptions = {
        headers: new HttpHeaders(headerDict),
        };
   
      this.spinner.show();
    this.http.post('https://localhost:44374/api/ContactsUs/CreateContactUs',data3,requestOptions)
      .subscribe((data:any)=>{
        this.spinner.hide();
  
        this.toaster.success('Send testmonial successfully ');
        this.router.navigate(['']);
      
      },error=>{
        this.spinner.hide();
        this.toaster.error('Something went wrong');
      
      })
  }
  GetAllAboutUs(){
    //call services
    return this.http.get('https://localhost:44374/api/AboutUs/GetAboutUs').subscribe((result)=> { 
   this.aboutUs=result,
   this.spinner.hide();
   this.toaster.success('Data Retrieved!'); },
   (error) => this.toaster.error(error.status));
  
    }
  uploadAttachment(file:FormData,id:number){
    debugger

    const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    }
    const requestOptions = {
    headers: new HttpHeaders(headerDict),
    };
    this.http.post('https://localhost:44374/api/' +'OurTeam/upload/',file).subscribe((data1: any) => {
    this.display_image=data1.image;
    debugger
    if(data1){
    console.log(this.display_image);
    const data2={
      img:this.display_image.toString(),
      Id:id
   
      }
      this.UpdateImageOurTeam(data2)
  }
    }, err => {
    
    })
    }

    UpdateImageOurTeam(data3:any){
    debugger
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
      const requestOptions = {
        headers: new HttpHeaders(headerDict),
        };
   
      this.spinner.show();
    this.http.post('https://localhost:44374/api/OurTeam/UpdateImageTeam',data3,requestOptions).subscribe((data4: any) => {
      this.spinner.hide();
  }
    )

  
  }
}
