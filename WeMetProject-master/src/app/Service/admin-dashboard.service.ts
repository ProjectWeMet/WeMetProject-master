import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {
  display_image:any
  data : any =[{
  }] 
  data2 : any ={
  }
  data3 : any=[{

  }]
 data4 : any=[]

  data5 : any=[]
  data6 : any=[{

  }]




  constructor(private http:HttpClient,private toaster:ToastrService , private spinner: NgxSpinnerService) { }


  GetProfileAdmin(){
    //call services
 return this.http.get('https://localhost:44374/api/Users/ProFileAdmin').subscribe((result)=> { 
   this.data=result,
   this.spinner.hide();
   this.toaster.success('Data Retrieved!'); },
   (error) => this.toaster.error(error.status));
  
    }
    uploadAttachment(file:FormData,id:any){
      debugger

      const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
      const requestOptions = {
      headers: new HttpHeaders(headerDict),
      };
      this.http.post('https://localhost:44374/api/' +'Users/upload/',file).subscribe((data1: any) => {
      this.display_image=data1.imageName;
      debugger
      if(data1){
      console.log(this.display_image);
      const data2={
        ImageName:this.display_image.toString(),
        UserId:id
        }
        this.UpdateImage(data2)
    }
      }, err => {
      
      })
      }

    UpdateImage(data3:any){
      debugger
      const headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
        const requestOptions = {
          headers: new HttpHeaders(headerDict),
          };
     
        this.spinner.show();
      this.http.post('https://localhost:44374/api/Users/UpdateImage',data3,requestOptions).subscribe((data4: any) => {
        this.spinner.hide();
    }
      )
  
    
    }
    
    countUser(){
      debugger
      //call services
   return this.http.get('https://localhost:44374/api/Users/CountUser').subscribe((result)=> { 
     this.data3=result,
     this.spinner.hide();
     this.toaster.success('Data Retrieved!'); },
     (error) => this.toaster.error(error.status));
    
      }
    
      CountCompleteProject(){
        debugger
        //call services
     return this.http.get('https://localhost:44374/api/Project/CountCompleteProject').subscribe((result)=> { 
       this.data4=result,
       console.log(this.data4)
       this.spinner.hide();
       this.toaster.success('Data Retrieved!'); },
       (error) => this.toaster.error(error.status));
      
        }

        CountAcceptJobSchedule(){
          debugger
          //call services
       return this.http.get('https://localhost:44374/api/Schedule/CountAcceptJobSchedule').subscribe((result)=> { 
         this.data5=result,
       
         this.spinner.hide();
         this.toaster.success('Data Retrieved!'); },
         (error) => this.toaster.error(error.status));
        
          }

          
          GetAllUsers(){
          debugger
          //call services
       return this.http.get('https://localhost:44374/api/Users/GetAllUsers').subscribe((result)=> { 
         this.data6=result,
         console.log(this.data6)
       
         this.spinner.hide();
        //  this.toaster.success('Data Retrieved!');
       },
         (error) => this.toaster.error(error.status));
        
          }
        
      
    
}



