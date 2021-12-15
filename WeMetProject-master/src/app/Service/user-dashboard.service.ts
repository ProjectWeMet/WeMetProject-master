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
  UserId:any;
  CV:any;
  display_image:any;
  allSchedule:any=[];
  User:any={};
  myWork:any=[];
  Schedule:any=[];
  Balance:any=[];
  constructor(private http:HttpClient,private spiner :NgxSpinnerService,private router:Router
    ,private toastr:ToastrService ) { 
      this.getPublishedProjects(this.UserId);
    }



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
  GetBalanceById(id:number){
    debugger
    this.spiner.show();
    this.http.get('https://localhost:44374/api/BalanceAccount/GetBalanceById/'+id).subscribe((data:any)=>{
      debugger
      this.Balance=data;
      console.log(this.Balance);
      
    // this.router.navigate(['user/myWork']);
      this.spiner.hide();

    },err=>{
      this.spiner.hide();
      // this.toastr.error(err.status);
      // this.router.navigate(['']);
    })
  }
  UpdateBalance(data:any){
    debugger
    this.spiner.show();
    this.http.post('https://localhost:44374/api/BalanceAccount/UpdateBalance/',data).subscribe((data:any)=>{
      debugger
      this.GetBalanceById(this.UserId);

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
     console.log(this.projectDetaile[0])

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
     
     this.GetProjectById(date1.projectId);
    // this.router.navigate(['user/projects']);
     this.toastr.success('The application has been successfully added');
    //  this.GetProjectById(date1.projectId);
    // this.router.navigate(['user/projects']);

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

     this.toastr.success('Add project successfull,The request to add has been sent to the admin');
  
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
  editSchedule(schedule:any){debugger
    this.spiner.show();
    this.http.post('https://localhost:44374/api/Schedule/UpdateSchedule',schedule)
    .subscribe((data:any)=>{
     this.spiner.hide();
     this.toastr.success(' Update Schedule successfully');
     this.getAllScheduleByUserId(this.UserId)
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
    //  this.toastr.success('Retrieve data');
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
     this.getMyWorkById(this.UserId);
    //  this.GetProjectById(date1.projectId);
    // this.router.navigate(['user/myProfile']);

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
       this.getMyWorkById(this.UserId);
      //  this.GetProjectById(date1.projectId);
      // this.router.navigate(['user/myProfile']);
  
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
       this.getMyWorkById(this.UserId);
      //  this.GetProjectById(date1.projectId);
      // this.router.navigate(['user/myProfile']);
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
  acceptJobSchedule(id:number){debugger
    this.spiner.show();
    this.http.get('https://localhost:44374/api/Schedule/AcceptJobSchedule/'+id).subscribe((data:any)=>{
      debugger
      this.spiner.hide();

      this.getAllScheduleByUserId(this.UserId);

    },err=>{
      this.spiner.hide();
      this.toastr.error(err.status);
    })
  }
  searchSchedule(data:any){debugger
    const headerDict={
      'Content-Type':'application/json',
      'Accept':'application/json'
    }
    const requestOptions={
      headers:new HttpHeaders(headerDict)
    }
    this.spiner.show();
    this.http.post('https://localhost:44374/api/Schedule/searchSchedule/',data,requestOptions).subscribe((data:any)=>{
      debugger
      this.allSchedule=data;
      this.spiner.hide();

    },err=>{
      this.spiner.hide();
      this.toastr.error(err.status);
    })
  }
  CompletProject(projectId:any){
    this.spiner.show();
    this.http.get('https://localhost:44374/api/Project/CompletProject/'+projectId).subscribe((data:any)=>{
      debugger
      this.spiner.hide();
      this.toastr.success("Complete project successfully ");
      this.router.navigate(['user/publishedProjects']); },err=>{
        this.spiner.hide();
        this.toastr.error(err.status);
      })
    }

editUserQualification(data:any){debugger
  this.spiner.show();
  this.http.post('https://localhost:44374/api/Users/updateQualification',data)
  .subscribe((data:any)=>{
   this.spiner.hide();
   this.getUserById(this.UserId);
   this.toastr.success('Update User successfully' );
     },error=>{
   this.spiner.hide();
   this.toastr.error('Something went wrong');

 
})
}

editUserAccount(data:any){debugger
  const headerDict={
    'Content-Type':'application/json',
    'Accept':'application/json'
  }
  const requestOptions={
    headers:new HttpHeaders(headerDict)
  }
  this.spiner.show();
  this.http.post('https://localhost:44374/api/Users/UpdatePersonalInformation',data,requestOptions)
  .subscribe((data:any)=>{
   this.spiner.hide();
   this.getUserById(this.UserId)
   this.toastr.success('Update User successfully' );
     },error=>{
   this.spiner.hide();
   this.toastr.error('Something went wrong');
 
})
}

uploadImageProfile(file:FormData,Profile:any){
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
    UserId:Profile.UserId,
    Email:Profile.Email,
    FName:Profile.FName,
    LName:Profile.LName,
    PhoneNumber:Profile.PhoneNumber,
    DOB:Profile.DOB,
    Country:Profile.Country,
    imageName:this.display_image
  
  }
    this.editUserAccount(data2);
    
}
  }, err => {
  
  })
  }


  getAllSchedule(id:any){
    this.spiner.show();
     this.http.get('https://localhost:44374/api/Schedule/GetScheduleById/'+id)
     .subscribe((data:any)=>{
      this.spiner.hide();
      this.Schedule=data;

      // this.toastr.success('Deleted ');
    
    },error=>{
      this.spiner.hide();
      // this.toastr.error(' Not Deleted ');
    
    })
  }
  createTestmonial(data:any){debugger
    const headerDict={
      'Content-Type':'application/json',
      'Accept':'application/json'
    }
    const requestOptions={
      headers:new HttpHeaders(headerDict)
    }
    this.spiner.show();
     this.http.post('https://localhost:44374/api/Testmonial/InsertTestmonial',data,requestOptions)
     .subscribe((data:any)=>{
      this.spiner.hide();

      this.toastr.success('Send testmonial successfully ');
    
    },error=>{
      this.spiner.hide();
      this.toastr.error('Something went wrong');
    
    })
  }
}
   

