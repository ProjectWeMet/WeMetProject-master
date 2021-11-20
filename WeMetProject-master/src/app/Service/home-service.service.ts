import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  // categrey
  allCategrey : any =[{
  }] 
  display_image:any
  categorey:any={}
  Projects:any=[];
  // blog
  allBlog : any =[{
  }] 
  displayBlog_image:any
  Blog:any={}
  testimonial:any=[];
  constructor(private http:HttpClient,private toaster:ToastrService , private spinner: NgxSpinnerService,private router:Router) { }


  getAllProjects(){
    this.spinner.show();
     this.http.get('https://localhost:44374/api/Project/VeiwAllProjectForUser')
     .subscribe((data:any)=>{
      this.spinner.hide();
      this.Projects=data;

      // this.toastr.success('Deleted ');
    
    },error=>{
      this.spinner.hide();
      // this.toastr.error(' Not Deleted ');
    
    })
  }

  GetAllCategorey(){
    //call services
    return this.http.get('https://localhost:44374/api/Category').subscribe((result)=> { 
   this.allCategrey=result,
   this.spinner.hide();
    },
   (error) => this.toaster.error(error.status));
  
    }
     
  GetCategoreyById(id:number){
    debugger
    this.spinner.show();
    this.http.get('https://localhost:44374/api/Category/GetCategoryById/'+id).subscribe((data:any)=>{
      debugger
      this.categorey=data;
      console.log(this.categorey);
      this.spinner.hide();
      this.toaster.success('Data Retrieved!'); 
    },(error) => this.toaster.error(error.status));
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
    this.http.post('https://localhost:44374/api/' +'Category/upload/',file).subscribe((data1: any) => {
    this.display_image=data1.image;
    debugger
    if(data1){
    console.log(this.display_image);
    const data2={
      image:this.display_image.toString(),
      categoryId:id
      }
      this.UpdateImageCategory(data2)
  }
    }, err => {
    
    })
    }

    UpdateImageCategory(data3:any){
    debugger
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
      const requestOptions = {
        headers: new HttpHeaders(headerDict),
        };
   
      this.spinner.show();
    this.http.post('https://localhost:44374/api/Category/UpdateCategory',data3,requestOptions).subscribe((data4: any) => {
      this.spinner.hide();
  }
    )

  
  }
  

  

//BLOG
  GetAllBLOG(){
  //call services
  return this.http.get('https://localhost:44374/api/BLOG').subscribe((result)=> { 
 this.allBlog=result,
 this.spinner.hide();
 this.toaster.success('Data Retrieved!'); },
 (error) => this.toaster.error(error.status));

  }

  GetBLOGById(id:any){
    debugger
    this.spinner.show();
    this.http.get('https://localhost:44374/api/BLOG/GetBLOGById/'+id).subscribe((data:any)=>{
      debugger
      this.Blog=data;
      console.log(this.Blog);
      this.spinner.hide();
      this.toaster.success('Data Retrieved!'); 
    },(error) => this.toaster.error(error.status));
  }


//

    UpdateImageBlog(data3:any){
      debugger
      const headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
        const requestOptions = {
          headers: new HttpHeaders(headerDict),
          };
     
        this.spinner.show();
      this.http.post('https://localhost:44374/api/BLOG/UpdateImageBLOG',data3,requestOptions).subscribe((data4: any) => {
        this.spinner.hide();
    }
      )
  
    
    }
    uploadAttachmentBlog(file:FormData,id:any){
      debugger
  
      const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
      const requestOptions = {
      headers: new HttpHeaders(headerDict),
      };
      this.http.post('https://localhost:44374/api/' +'BLOG/upload/',file).subscribe((data1: any) => {
      this.displayBlog_image=data1.img;
      debugger
      if(data1){
      console.log(this.displayBlog_image);
      const data2={
        img:this.displayBlog_image.toString(),
        id:id
        }
        this.UpdateImageBlog(data2)
    }
      }, err => {
      
      })
      }


      getAlltestimonial(){
        this.spinner.show();
         this.http.get('https://localhost:44374/api/Testmonial/DisplayAllTestmonial')
         .subscribe((data:any)=>{
          this.spinner.hide();
          this.testimonial=data;
        },error=>{
          this.spinner.hide();
          // this.toastr.error(' Not Deleted ');
        
        })
      }
  


}
