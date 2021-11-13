import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  // blog
  allBlog : any =[{
  }] 
  displayBlog_image:any
  Blog:any={}
  constructor(private http:HttpClient,private toaster:ToastrService , private spinner: NgxSpinnerService) { }


  GetAllCategorey(){
    //call services
    return this.http.get('https://localhost:44374/api/Category').subscribe((result)=> { 
   this.allCategrey=result,
   this.spinner.hide();
   this.toaster.success('Data Retrieved!'); },
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

  GetBLOGById(id:number){
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

  uploadAttachmentt(file:FormData,id:number){
    debugger

    const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    }
    const requestOptions = {
    headers: new HttpHeaders(headerDict),
    };
    this.http.post('https://localhost:44374/api/' +'BLOG/upload/',file).subscribe((data1: any) => {
    this.displayBlog_image=data1.image;
    debugger
    if(data1){
    console.log(this.displayBlog_image);
    const data2={
      image:this.displayBlog_image.toString(),
      Id:id
   
      }
      this.UpdateImageBlog(data2)
  }
    }, err => {
    
    })
    }
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

}
