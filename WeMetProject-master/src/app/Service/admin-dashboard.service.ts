import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {
  display_image: any
  display_image1: any
  display_image2: any
  data: any = []
  data2: any = {
  }
  data3: any = [{

  }]
  data4: any = []

  data5: any = []
  users: any = [{

  }]
  acceptProject: any = [{

  }]
  allAbout:any=[]
  getAllProjects: any = [{}]
  allCategrey:any=[{}]
  OpenProject:any=[{}]
  viewProjectNotAcceptAdmin: any = [{}]

  getallProjectHighestApplyJob: any = [{}]

  Projects: any = [{}]
  getAllContactUs:any=[{}]
  testimonial:any=[];
  profit:any=[];
  monthChart:any;
  profitChart:any;
  profitChart1:any;
  countProjectChart1:any

  countProjectChart:any;
  User:any={};
  myWork:any=[];
  Balance:any=[];
  PublishedProjects:any=[];
  projectDetaile:any=[];
  ApplyJob:any=[];

  constructor(private http: HttpClient, private toaster: ToastrService, private spinner: NgxSpinnerService) { }


  GetProfileAdmin() {
    //call services
      this.http.get('https://localhost:44374/api/Users/GetProFileAdmin').subscribe((result) => {
      this.data = result,
        this.spinner.hide();
        console.log(this.data)
      // this.toaster.success('Data Retrieved!');
    },
      (error) => this.toaster.error(error.status));

  }
  uploadAttachment(file: FormData) {
    debugger

    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    this.http.post('https://localhost:44374/api/' + 'Users/upload/', file).subscribe((data1: any) => {
      this.display_image1 = data1.imageName;
      //debugger
      if (data1) {
        console.log(this.display_image1);
        const data2 = {
          ImageName: this.display_image1.toString(),
          UserId: 19
        }
        this.UpdateImage(data2)
      }
    }, err => {

    })
  }

  UpdateImage(data3: any) {
    debugger
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    this.spinner.show();
    this.http.post('https://localhost:44374/api/Users/UpdateImage', data3, requestOptions).subscribe((data4: any) => {
      this.spinner.hide();
      this.toaster.success('Update image successfully');
      //window.location.reload();


    }
    )


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
  this.spinner.show();
  this.http.get('https://localhost:44374/api/ApplyJob/GetApplyJobByProject/'+id)
  .subscribe((data:any)=>{
   this.ApplyJob=data;
   this.spinner.hide();

 },error=>{
      this.spinner.hide();
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

    this.spinner.show();
     this.http.post('https://localhost:44374/api/Users/SearchUserAdmin',data,requestOptions)
     .subscribe((data:any)=>{
      this.spinner.hide();
      this.users=data;

      //  this.toastr.success('Deleted ');
    
    },error=>{
      this.spinner.hide();
      // this.toastr.error(' Not Deleted ');
    
    })
  }
  getPublishedProjects(id:any){
    this.spinner.show();
     this.http.get('https://localhost:44374/api/Project/publishedById/'+id)
     .subscribe((data:any)=>{
      this.spinner.hide();
      this.PublishedProjects=data;

      // this.toastr.success('Deleted ');
    
    },error=>{
      this.spinner.hide();
      // this.toastr.error(' Not Deleted ');
    
    })
  }
  SearchPublishedProject(Project:any){debugger
    this.spinner.show();
    this.http.post('https://localhost:44374/api/Project/SearchPublishedProject',Project)
    .subscribe((data:any)=>{
     this.spinner.hide();
    //  this.toastr.success('Retrieve data');
     this.PublishedProjects=data;
       },error=>{
     this.spinner.hide();
     this.toaster.error('Something went wrong');
   
   })
  }
  countUser() {
    //debugger
    //call services
      this.http.get('https://localhost:44374/api/Users/CountUser').subscribe((result) => {
      this.data3 = result,
        this.spinner.hide();
      // this.toaster.success('Data Retrieved!');
    },
      (error) => this.toaster.error(error.status));

  }

  CountCompleteProject() {
    //debugger
    //call services
      this.http.get('https://localhost:44374/api/Project/CountCompleteProject').subscribe((result) => {
      this.data4 = result,
        console.log(this.data4)
      this.spinner.hide();
      // this.toaster.success('Data Retrieved!');
    },
      (error) => this.toaster.error(error.status));

  }
  CountOpenProject() {
    //debugger
    //call services
    this.http.get('https://localhost:44374/api/Project/CountOpenProject').subscribe((result) => {
      this.OpenProject = result;
      console.log(this.OpenProject)

      this.spinner.hide();
      // this.toaster.success('Data Retrieved!');
    },
      (error) => this.toaster.error(error.status));

  }
  CountAcceptJobSchedule() {
    //debugger
    //call services
    this.http.get('https://localhost:44374/api/Schedule/CountAcceptJobSchedule').subscribe((result) => {
      this.data5 = result,
      this.ChartProfit();
        this.spinner.hide();
      // this.toaster.success('Data Retrieved!');
    },
      (error) => this.toaster.error(error.status));

  }

  GetAllUsers() {
    //debugger
    //call services
    this.http.get('https://localhost:44374/api/Users/GetAllUsers').subscribe((result:any) => {
      
      this.users = result,
     
      this.spinner.hide();
      //  this.toaster.success('Data Retrieved!');
    },
      (error) => this.toaster.error(error.status));

  }
  getUserById(id:number){
    this.spinner.show();
    this.http.get('https://localhost:44374/api/Users/GetUserById/'+id).subscribe((data:any)=>{
      debugger
      this.User=data;
      this.spinner.hide();

    },err=>{
      this.spinner.hide();
      this.toaster.error(err.status);
    })
  }
  getMyWorkById(id:number){
    debugger
    this.spinner.show();
    this.http.get('https://localhost:44374/api/MyWork/getAllMyWork/'+id).subscribe((data:any)=>{
      debugger
      this.myWork=data;
      // console.log(this.data1);
      
    // this.router.navigate(['user/myWork']);
      this.spinner.hide();

    },err=>{
      this.spinner.hide();
      // this.toastr.error(err.status);
      // this.router.navigate(['']);
    })
  }
  GetBalanceById(id:number){
    debugger
    this.spinner.show();
    this.http.get('https://localhost:44374/api/BalanceAccount/GetBalanceById/'+id).subscribe((data:any)=>{
      debugger
      this.Balance=data;
      console.log(this.Balance);
      
    // this.router.navigate(['user/myWork']);
      this.spinner.hide();

    },err=>{
      this.spinner.hide();
      // this.toastr.error(err.status);
      // this.router.navigate(['']);
    })
  }
  ChartProfit() {
    debugger
    //call services
    this.http.get('https://localhost:44374/api/Profit/ChartProfit').subscribe((result:any) => {
      debugger
      var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      this.monthChart=[];
      this.profitChart=[];
      this.countProjectChart=[];
      result.forEach((card:any) => {
        this.monthChart.push(months[card.month-1])   
        this.profitChart.push(card.amount)   
        this.countProjectChart.push(card.countProject)  

      });
      this.profitChart1=[{ data: this.profitChart , label:'Amount of profit JD'}];
      this.countProjectChart1=[{ data: this.countProjectChart, label: 'Count Project' }]


      this.spinner.hide();
      //  this.toaster.success('Data Retrieved!');
    },
      (error) => this.toaster.error(error.status));

  }
  GetAllProfit() {
    //debugger
    //call services
    this.http.get('https://localhost:44374/api/Profit/GetAllProfit').subscribe((result:any) => {
      this.profit=result
      this.spinner.hide();
      //  this.toaster.success('Data Retrieved!');
    },
      (error) => this.toaster.error(error.status));

  }

  ViewProjectNotAcceptAdmin() {  
    //debugger
    //call services
    this.http.get('https://localhost:44374/api/Users/ViewProjectNotAcceptAdmin').subscribe((result) => {
      this.viewProjectNotAcceptAdmin = result,
        console.log(this.viewProjectNotAcceptAdmin),
        //  this.AcceptProject(this.viewProjectNotAcceptAdmin.projectId)
        this.spinner.hide();
      // this.toaster.success('Data Retrieved!');
    },
      (error) => this.toaster.error(error.status));

  }


  AcceptProject(id: any) {
    //debugger
    //call services
    this.http.post('https://localhost:44374/api/Project/AcceptProject', id).subscribe((result) => {
      console.log(this.acceptProject)
      this.spinner.hide();

      this.toaster.success('Accepted Project!');
      this.ViewProjectNotAcceptAdmin();
      this.ChartProfit()

      // //window.location.reload();

    },
      (error) => this.toaster.error(error.status));

  }

  RejectProject(id: any) {
    //debugger
    //call services
    this.http.post('https://localhost:44374/api/Project/delete', id).subscribe((result) => {
      this.spinner.hide();
      this.toaster.success('Rejected Project !');
      this.ViewProjectNotAcceptAdmin();

    },
      (error) => this.toaster.error(error.status));
  }



  GetallProjectHighestApplyJob() {
    //debugger
    //call services
      this.http.get('https://localhost:44374/api/Project/GetallProjectHighestApplyJob').subscribe((result) => {
      this.getallProjectHighestApplyJob = result,
        this.spinner.hide();
      // this.toaster.success('Data Retrieved!');
    },
      (error) => this.toaster.error(error.status));
  }
  uploadAttachmentCategorey(file: FormData, id: any, categoryTitle: any) {
    debugger

    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    this.http.post('https://localhost:44374/api/' + 'Category/upload/', file).subscribe((data1: any) => {
      this.display_image = data1.image;
      debugger
      if (data1) {
        console.log(this.display_image);
        const data2 = {
          image: this.display_image.toString(),
          categoryId: id,
          categoryTitle: categoryTitle
        }
        this.UpdateCategoreyAll(data2)
      }
    }, err => {

    })
  }
  UpdateCategoreyAll(date1: any) {
    debugger
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    this.spinner.show();
    this.http.post('https://localhost:44374/api/Category/UpdateCategoryAll', date1, requestOptions)
      .subscribe((data: any) => {
        this.spinner.hide();
        this.GetAllCategorey();

        this.toaster.success('Update categorey successfully ');

      }, error => {
        this.spinner.hide();
        this.toaster.error('Something went wrong');

      })
  }

  GetAllProjects() {
    debugger
    //call services
      this.http.get('https://localhost:44374/api/Project/GetAllProjects').subscribe((result) => {
      this.getAllProjects = result,
        console.log(this.viewProjectNotAcceptAdmin),

        this.spinner.hide();
      // this.toaster.success('Data Retrieved!');
    },
      (error) => this.toaster.error(error.status));

  }


  //SearchProject
  searchProject(data: any) {
    debugger
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    }

    this.spinner.show();
    this.http.post('https://localhost:44374/api/Project/SearchAdminProject', data, requestOptions)
      .subscribe((data: any) => {
        this.spinner.hide();
        this.Projects = data;

        // this.toastr.success('Deleted ');

      }, error => {
        this.spinner.hide();
        // this.toastr.error(' Not Deleted ');

      })
  }


  UpdateProFileAdmin(date1: any) {
    debugger
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    this.spinner.show();
    this.http.post('https://localhost:44374/api/Users/ProFileAdmin', date1, requestOptions)
      .subscribe((data: any) => {
        this.spinner.show();
        this.spinner.hide();
        this.toaster.success('Data Update');
        this.GetProfileAdmin();
      }, error => {
        this.spinner.hide();
        this.toaster.error(' Not Update');

      })
  }


  CreateCategorey(date1: any) {
    debugger
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    this.spinner.show();
    this.http.post('https://localhost:44374/api/Category/CreateCategory', date1, requestOptions)
      .subscribe((data: any) => {
         this.GetAllCategorey();
        this.toaster.success('Data Created ');

      }, error => {
        this.spinner.hide();
        this.toaster.error(' Not Created');

      })
  }
  //uploadAttachmentCreateCategorey ====> Create Categorey
  uploadAttachmentCreateCategorey(file: FormData,Title:string) {
    debugger

    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    this.http.post('https://localhost:44374/api/' + 'Category/upload/', file).subscribe((data1: any) => {
      this.display_image2 = data1.image;
      debugger
    const data={
        image:this.display_image2,
        categoryTitle:Title
      }
    this.CreateCategorey(data);

      
    }, err => {

    })
  }

  //GetAllContactsUs
  GetAllContactUs() {
    debugger

      this.http.get('https://localhost:44374/api/ContactsUs/GetAllContactUs').subscribe((result) => {
      this.getAllContactUs = result,
        console.log(this.viewProjectNotAcceptAdmin),

        this.spinner.hide();
      // this.toaster.success('Data Retrieved!');
    },
      (error) => this.toaster.error(error.status));

  }

  //Delete Contacts Us 
  DeleteContactUs(id: any) {debugger
    //debugger
    //call services
      this.http.delete('https://localhost:44374/api/ContactsUs/DeleteContactUs/'+ id).subscribe((result) => {
      this.spinner.hide();
      //window.location.reload();
      this.toaster.success('Data Deleted!');
      this.GetAllContactUs();
    },
      (error) => this.toaster.error(error.status));
  }
  GetAllCategorey(){
    //call services
      this.http.get('https://localhost:44374/api/Category').subscribe((result)=> { 
   this.allCategrey=result,
   this.spinner.hide();
    },
   (error) => this.toaster.error(error.status));
  
    }
    GetAllAboutAs(){
      //call services
        this.http.get('https://localhost:44374/api/AboutUs/GetAboutUs').subscribe((result)=> { 
     this.allAbout=result,
     this.spinner.hide();
      },
     (error) => this.toaster.error(error.status));
    
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

    Deletetestimonial(id:any){debugger
      this.http.delete('https://localhost:44374/api/Testmonial/DeleteTestmonial/'+id)
      .subscribe((data:any)=>{

       this.toaster.success('Delete testimonial successfully' );
       this.getAlltestimonial();
       //window.location.reload();
    },error=>{
              this.toaster.error(' Not Deleted ');

    })
    }
    Accepttestimonial(id:any){debugger
      this.http.get('https://localhost:44374/api/Testmonial/acceptTestmonial/'+id)
      .subscribe((data:any)=>{

       this.toaster.success('Update testimonial successfully' );
       //window.location.reload();
       this.getAlltestimonial()
    },error=>{
              this.toaster.error(' Not Deleted ');

    })
    }
    
  UpdateAboutAdmin(img :any,date1: any) {
    debugger
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    this.spinner.show();
    this.http.post('https://localhost:44374/api/AboutUs/upload', img)
      .subscribe((data: any) => {
        this.spinner.hide();
        const data3={
          id:1,
          phone:date1.phone,
          descriptions:date1.descriptions,
          logo:data.logo
         }
         debugger 
        this.updateAboutAs(data3);
      }, error => {
        this.spinner.hide();
        this.toaster.error(' Not Update');

      })
  }
  updateAboutAs(data:any){debugger
    this.spinner.show();
    this.http.post('https://localhost:44374/api/AboutUs/UpdateAboutUs',data)
    .subscribe((data:any)=>{
     this.spinner.hide();
     this.toaster.success('Update about as info successfully' );
     this.GetAllAboutAs()
     //window.location.reload();

       },error=>{
     this.spinner.hide();
     this.toaster.error('Something went wrong');
  
   
  })
  }
}



