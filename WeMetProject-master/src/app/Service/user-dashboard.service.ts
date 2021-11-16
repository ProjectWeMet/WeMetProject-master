import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';



@Injectable({
  providedIn: 'root'
})
export class UserDashboardService {
  Categorys:any=[];
  Projects:any=[];
  PublishedProjects:any=[];


  projectDetaile:any=[];
  Users:any=[];
  userProject:any=[];

  addProject:any=[];
  addProjectToUser:any=[];
  ApplyJob:any=[];
  UserId:number=6;
  CV:any;
  allSchedule:any=[];


  User:any={};
  myWork:any=[];
  constructor(private http:HttpClient,private spiner :NgxSpinnerService,private router:Router
    ,private toastr:ToastrService ) { }



  getAllUsers(){
    this.spiner.show();
     this.http.get('https://localhost:44374/api/Users/GetAllUsers')
     .subscribe((data:any)=>{
      this.spiner.hide();
      this.Users=data;
    },error=>{
      this.spiner.hide();
      // this.toastr.error(' Not Deleted ');
    
    })
  }

  getAllCategory(){debugger
    this.spiner.show();
     this.http.get('https://localhost:44374/api/Category')
     .subscribe((data:any)=>{
      this.spiner.hide();debugger
      this.Categorys=data;
      // this.toastr.success('Deleted ');
    
    },error=>{
      this.spiner.hide();
      // this.toastr.error(' Not Deleted ');
    
    })
  }
  getAllProjects(){
    this.spiner.show();
     this.http.get('https://localhost:44374/api/Project/VeiwAllProjectForUser')
     .subscribe((data:any)=>{
      this.spiner.hide();
      this.Projects=data;

      // this.toastr.success('Deleted ');
    
    },error=>{
      this.spiner.hide();
      // this.toastr.error(' Not Deleted ');
    
    })
  }
  searchProject(data:any){debugger
    const headerDict={
      'Content-Type':'application/json',
      'Accept':'application/json'
    }
    const requestOptions={
      headers:new HttpHeaders(headerDict)
    }

    this.spiner.show();
     this.http.post('https://localhost:44374/api/Project/SearchProject',data,requestOptions)
     .subscribe((data:any)=>{
      this.spiner.hide();
      this.Projects=data;

      // this.toastr.success('Deleted ');
    
    },error=>{
      this.spiner.hide();
      // this.toastr.error(' Not Deleted ');
    
    })
  }

  searchUser(data:any){debugger
    const headerDict={
      'Content-Type':'application/json',
      'Accept':'application/json'
    }
    const requestOptions={
      headers:new HttpHeaders(headerDict)
    }

    this.spiner.show();
     this.http.post('https://localhost:44374/api/Users/SearchUserNotActive',data,requestOptions)
     .subscribe((data:any)=>{
      this.spiner.hide();
      this.Users=data;

      //  this.toastr.success('Deleted ');
    
    },error=>{
      this.spiner.hide();
      // this.toastr.error(' Not Deleted ');
    
    })
  }

 getOrderByDateDesc(){
    this.spiner.show();
     this.http.get('https://localhost:44374/api/Project/SearchProjectOrderByDateDesc')
     .subscribe((data:any)=>{
      this.spiner.hide();
      this.Projects=data;

      // this.toastr.success('Deleted ');
    
    },error=>{
      this.spiner.hide();
      // this.toastr.error(' Not Deleted ');
    
    })
  } 
  getOrderByCountApplyJobDesc(){
    this.spiner.show();
     this.http.get('https://localhost:44374/api/Project/SearchProjectOrderByCountApplyJobDesc')
     .subscribe((data:any)=>{
      this.spiner.hide();
      this.Projects=data;

      // this.toastr.success('Deleted ');
    
    },error=>{
      this.spiner.hide();
      // this.toastr.error(' Not Deleted ');
    
    })
  } 
  getOrderByCountApplyJobAsc(){
    this.spiner.show();
     this.http.get('https://localhost:44374/api/Project/SearchProjectOrderByCountApplyJobAsc')
     .subscribe((data:any)=>{
      this.spiner.hide();
      this.Projects=data;

      // this.toastr.success('Deleted ');
    
    },error=>{
      this.spiner.hide();
      // this.toastr.error(' Not Deleted ');
    
    })
  } 
  getOrderByDateAsc(){
    this.spiner.show();
     this.http.get('https://localhost:44374/api/Project/SearchProjectOrderByDateAsc')
     .subscribe((data:any)=>{
      this.spiner.hide();
      this.Projects=data;

      // this.toastr.success('Deleted ');
    
    },error=>{
      this.spiner.hide();
      // this.toastr.error(' Not Deleted ');
    
    })


  }
  
  
  getUserById(id:number){
    this.spiner.show();
    this.http.get('https://localhost:44374/api/Users/GetUserById/'+id).subscribe((data:any)=>{
      debugger
      this.User=data;
      this.spiner.hide();

    },err=>{
      this.spiner.hide();
      this.toastr.error(err.status);
    })
  }


  getMyWorkById(id:number){
    debugger
    this.spiner.show();
    this.http.get('https://localhost:44374/api/MyWork/getAllMyWork/'+id).subscribe((data:any)=>{
      debugger
      this.myWork=data;
      // console.log(this.data1);
      
    // this.router.navigate(['user/myWork']);
      this.spiner.hide();

    },err=>{
      this.spiner.hide();
      // this.toastr.error(err.status);
      // this.router.navigate(['']);
    })
  }


   
  GetProjectById(id:number){debugger
    return this.http.get('https://localhost:44374/api/Project/ProjectById/'+id)
    .subscribe((data:any)=>{
     this.projectDetaile=data;
     debugger
     this.getApplyJobByProject(id);
    //  console.log(id+"GetProjectById")
   })
 }
 getApplyJobByProject(id:number){debugger
  this.spiner.show();
  this.http.get('https://localhost:44374/api/ApplyJob/GetApplyJobByProject/'+id)
  .subscribe((data:any)=>{
   this.ApplyJob=data;
   this.spiner.hide();

 },error=>{
      this.spiner.hide();
      // this.toastr.error(' Not Deleted ');
    
    })
}
uploadAttachment(file:FormData, apply:any){
  debugger

  const headerDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
  }
  const requestOptions = {
  headers: new HttpHeaders(headerDict),
  };
  this.http.post('https://localhost:44374/api/ApplyJob/uploadCv',file).subscribe((d: any) => {
    
    this.CV=d.cv.toString();
    debugger
  if(d){    
    const data1={
      deliveryTerm:apply.deliveryTerm,
      offerValue:apply.offerValue,
      offerDetails:apply.offerDetails,
      userId:apply.userId,
      projectId:apply.projectId,
      cv:this.CV
      }
      console.log(d)
  
      this.CreateApplyJob(data1)

  }
  
  }, error => {
    console.log("data")

  });
  }
  CreateApplyJob(date1:any){debugger
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
      const requestOptions = {
      headers: new HttpHeaders(headerDict),
      };
    this.spiner.show();
    this.http.post('https://localhost:44374/api/ApplyJob/createApplyJob',date1,requestOptions)
    .subscribe((data:any)=>{
     this.spiner.hide();
    //  this.GetProjectById(date1.projectId);
    this.router.navigate(['user/projects']);

    //  this.toastr.success('Deleted ');
   
   },error=>{
     this.spiner.hide();
     // this.toastr.error(' Not Deleted ');
   
   })
  }
  getPublishedProjects(id:any){
    this.spiner.show();
     this.http.get('https://localhost:44374/api/Project/publishedById/'+id)
     .subscribe((data:any)=>{
      this.spiner.hide();
      this.PublishedProjects=data;

      // this.toastr.success('Deleted ');
    
    },error=>{
      this.spiner.hide();
      // this.toastr.error(' Not Deleted ');
    
    })
  }



 AddNewProject(data:any){debugger
  const headerDict={
    'Content-Type':'application/json',
    'Accept':'application/json'
  }
  const requestOptions={
    headers:new HttpHeaders(headerDict)
  }

  this.spiner.show();
   this.http.post('https://localhost:44374/api/Project/CreateAddProject',data,requestOptions)
   .subscribe((data:any)=>{
    this.spiner.hide();
    this.addProject=data;

     this.toastr.success('add successfull');
  
  },error=>{
    this.spiner.hide();
     this.toastr.error(' Not Deleted ');
  
  })
}


AddProjectToUser(data:any){debugger
  const headerDict={
    'Content-Type':'application/json',
    'Accept':'application/json'
  }
  const requestOptions={
    headers:new HttpHeaders(headerDict)
  }
  this.spiner.show();
   this.http.post('https://localhost:44374/api/Project/AddProjectToUser',data,requestOptions)
   .subscribe((data:any)=>{
    this.spiner.hide();
    this.addProjectToUser=data;

     this.toastr.success('add successfull');
  
  },error=>{
    this.spiner.hide();
     this.toastr.error(' Not Deleted ');
  
  })
}


  addSchedule(schedule:any,ProjectId:number){debugger
    this.spiner.show();
    this.http.post('https://localhost:44374/api/Schedule/CreateSchedule',schedule)
    .subscribe((data:any)=>{
     this.spiner.hide();
     this.toastr.success('The Schedule has been sent successfully');
     this.GetProjectById(ProjectId);
   },error=>{
     this.spiner.hide();
     this.toastr.error('Something went wrong');
   
   })
  }
  SearchPublishedProject(Project:any){debugger
    this.spiner.show();
    this.http.post('https://localhost:44374/api/Project/SearchPublishedProject',Project)
    .subscribe((data:any)=>{
     this.spiner.hide();
     this.toastr.success('Retrieve data');
     this.PublishedProjects=data;
       },error=>{
     this.spiner.hide();
     this.toastr.error('Something went wrong');
   
   })
  }
  editProject(Project:any){debugger
    this.spiner.show();
    this.http.post('https://localhost:44374/api/Project/editProject',Project)
    .subscribe((data:any)=>{
     this.spiner.hide();
     this.toastr.success('Update project successfully' );
       },error=>{
     this.spiner.hide();
     this.toastr.error('Something went wrong');
   
  })
}
uploadImageWork(file:FormData, work:any){
  debugger
  const headerDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
  }
  const requestOptions = {
  headers: new HttpHeaders(headerDict),
  };
  this.http.post('https://localhost:44374/api/MyWork/uploadImage',file).subscribe((d: any) => {
    
    this.CV=d.imageName.toString();
    debugger
  if(d){    
      const date={
        link:work.link,
        CompletionDate:work.CompletionDate,
        description:work.description,
        titel:work.titel,
        userId:work.userId,
        skill:work.skill,
        ImageName:this.CV
      }
  
      this.CreateWork(date)

  }
  }, error => {
    console.log("data")

  });
  }
  CreateWork(date1:any){debugger
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
      const requestOptions = {
      headers: new HttpHeaders(headerDict),
      };
    this.spiner.show();
    this.http.post('https://localhost:44374/api/MyWork/CreateMyWork',date1,requestOptions)
    .subscribe((data:any)=>{
     this.spiner.hide();
    //  this.GetProjectById(date1.projectId);
    this.router.navigate(['user/myProfile']);

    this.toastr.success('Create work successfully' );
  },error=>{
    this.spiner.hide();
    this.toastr.error('Something went wrong');
   
   })
  }
  uploadEditImageWork(file:FormData, work:any){
    debugger
    const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    }
    const requestOptions = {
    headers: new HttpHeaders(headerDict),
    };
    this.http.post('https://localhost:44374/api/MyWork/uploadImage',file).subscribe((d: any) => {
      
      this.CV=d.imageName.toString();
      debugger
    if(d){    
        const date={
          link:work.link,
          CompletionDate:work.CompletionDate,
          description:work.description,
          titel:work.titel,
          userId:work.userId,
          skill:work.skill,
          ImageName:this.CV,
          myWorkId:work.myWorkId
        }
    
        this.EditWork(date)
  
    }
    }, error => {
      console.log("data")
  
    });
    }
    EditWork(date1:any){debugger
      const headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
        const requestOptions = {
        headers: new HttpHeaders(headerDict),
        };
      this.spiner.show();
      this.http.post('https://localhost:44374/api/MyWork/UpdateMyWork',date1,requestOptions)
      .subscribe((data:any)=>{
       this.spiner.hide();
      //  this.GetProjectById(date1.projectId);
      this.router.navigate(['user/myProfile']);
  
      this.toastr.success('Update work successfully' );
    },error=>{
      this.spiner.hide();
      this.toastr.error('Something went wrong');
     
     })
    }
    DeleteWork(workId:any){debugger
      const headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
        const requestOptions = {
        headers: new HttpHeaders(headerDict),
        };
      this.spiner.show();
      this.http.delete('https://localhost:44374/api/MyWork/delete/'+workId)
      .subscribe((data:any)=>{
       this.spiner.hide();
      //  this.GetProjectById(date1.projectId);
      this.router.navigate(['user/myProfile']);
      this.toastr.success('Delete work successfully' );
    },error=>{
      this.spiner.hide();
      this.toastr.error('Something went wrong');
     
     })
    }
    GetUserProjectById(id:number){debugger
      return this.http.get('https://localhost:44374/api/Project/UserProjectByUserId/'+id)
      .subscribe((data:any)=>{
       this.userProject=data;
       debugger
       this.getApplyJobByProject(id);
      //  console.log(id+"GetProjectById")
     })
   }
   SearchUserProject(data:any){debugger
    const headerDict={
      'Content-Type':'application/json',
      'Accept':'application/json'
    }
    const requestOptions={
      headers:new HttpHeaders(headerDict)
    }

    this.spiner.show();
     this.http.post('https://localhost:44374/api/Project/SearchUserProject',data,requestOptions)
     .subscribe((data:any)=>{
      this.spiner.hide();
      this.userProject=data;

      // this.toastr.success('Deleted ');
    
    },error=>{
      this.spiner.hide();
      // this.toastr.error(' Not Deleted ');
    
    })
  }
  getAllScheduleByUserId(id:number){
    this.spiner.show();
    this.http.get('https://localhost:44374/api/Schedule/GetAllScheduleByUserId/'+id).subscribe((data:any)=>{
      debugger
      this.allSchedule=data;
      this.spiner.hide();

    },err=>{
      this.spiner.hide();
      this.toastr.error(err.status);
    })
  }
  }