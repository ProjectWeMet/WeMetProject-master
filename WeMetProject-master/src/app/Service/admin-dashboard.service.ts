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
  data6: any = [{

  }]
  acceptProject: any = [{

  }]
  getAllProjects: any = [{}]
  allCategrey:any=[{}]

  viewProjectNotAcceptAdmin: any = [{}]

  getallProjectHighestApplyJob: any = [{}]

  Projects: any = [{}]
  getAllContactUs:any=[{}]
  testimonial:any=[];
  constructor(private http: HttpClient, private toaster: ToastrService, private spinner: NgxSpinnerService) { }


  GetProfileAdmin() {
    //call services
    return this.http.get('https://localhost:44374/api/Users/GetProFileAdmin').subscribe((result) => {
      this.data = result,
        this.spinner.hide();
      this.toaster.success('Data Retrieved!');
    },
      (error) => this.toaster.error(error.status));

  }
  uploadAttachment(file: FormData, id: any) {
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
          UserId: id
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
    }
    )


  }

  countUser() {
    //debugger
    //call services
    return this.http.get('https://localhost:44374/api/Users/CountUser').subscribe((result) => {
      this.data3 = result,
        this.spinner.hide();
      // this.toaster.success('Data Retrieved!');
    },
      (error) => this.toaster.error(error.status));

  }

  CountCompleteProject() {
    //debugger
    //call services
    return this.http.get('https://localhost:44374/api/Project/CountCompleteProject').subscribe((result) => {
      this.data4 = result,
        console.log(this.data4)
      this.spinner.hide();
      // this.toaster.success('Data Retrieved!');
    },
      (error) => this.toaster.error(error.status));

  }

  CountAcceptJobSchedule() {
    //debugger
    //call services
    return this.http.get('https://localhost:44374/api/Schedule/CountAcceptJobSchedule').subscribe((result) => {
      this.data5 = result,

        this.spinner.hide();
      // this.toaster.success('Data Retrieved!');
    },
      (error) => this.toaster.error(error.status));

  }


  GetAllUsers() {
    //debugger
    //call services
    return this.http.get('https://localhost:44374/api/Users/GetAllUsers').subscribe((result) => {
      this.data6 = result,
        console.log(this.data6)

      this.spinner.hide();
      //  this.toaster.success('Data Retrieved!');
    },
      (error) => this.toaster.error(error.status));

  }




  ViewProjectNotAcceptAdmin() {  
    //debugger
    //call services
    return this.http.get('https://localhost:44374/api/Users/ViewProjectNotAcceptAdmin').subscribe((result) => {
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
    return this.http.post('https://localhost:44374/api/Project/AcceptProject', id).subscribe((result) => {
      this.ViewProjectNotAcceptAdmin();
      console.log(this.acceptProject)
      this.spinner.hide();
      this.toaster.success('Accepted Project!');
    },
      (error) => this.toaster.error(error.status));

  }

  RejectProject(id: any) {
    //debugger
    //call services
    return this.http.post('https://localhost:44374/api/Project/delete', id).subscribe((result) => {
      this.ViewProjectNotAcceptAdmin();
      this.spinner.hide();
      this.toaster.success('Rejected !');
    },
      (error) => this.toaster.error(error.status));
  }



  GetallProjectHighestApplyJob() {
    //debugger
    //call services
    return this.http.get('https://localhost:44374/api/Project/GetallProjectHighestApplyJob').subscribe((result) => {
      this.getallProjectHighestApplyJob = result,
        this.spinner.hide();
      this.toaster.success('Data Retrieved!');
    },
      (error) => this.toaster.error(error.status));
  }
  uploadAttachmentCategorey(file: FormData, id: any, categoryTitle: any) {
    //debugger

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


        //  this.toastr.success('Deleted ');

      }, error => {
        this.spinner.hide();
        // this.toastr.error(' Not Deleted ');

      })
  }

  GetAllProjects() {
    debugger
    //call services
    return this.http.get('https://localhost:44374/api/Project/GetAllProjects').subscribe((result) => {
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
        this.toaster.success('Data Update ');
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
  uploadAttachmentCreateCategorey(file: FormData,categoryTitle:any) {
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
    const  data={
        image:(this.display_image2).tostring(),
        categoryTitle:categoryTitle.categoryTitle
      }

      
    }, err => {

    })
  }

  //GetAllContactsUs
  GetAllContactUs() {
    debugger

    return this.http.get('https://localhost:44374/api/ContactsUs/GetAllContactUs').subscribe((result) => {
      this.getAllContactUs = result,
        console.log(this.viewProjectNotAcceptAdmin),

        this.spinner.hide();
      this.toaster.success('Data Retrieved!');
    },
      (error) => this.toaster.error(error.status));

  }

  //Delete Contacts Us 
  DeleteContactUs(id: any) {debugger
    //debugger
    //call services
    return this.http.delete('https://localhost:44374/api/ContactsUs/DeleteContactUs/'+ id).subscribe((result) => {
      this.spinner.hide();
      window.location.reload();
      this.toaster.success('Data Deleted!');
    },
      (error) => this.toaster.error(error.status));
  }
  GetAllCategorey(){
    //call services
    return this.http.get('https://localhost:44374/api/Category').subscribe((result)=> { 
   this.allCategrey=result,
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

       this.toaster.success('Delete work successfully' );
       window.location.reload();
    },error=>{
      
    })
    }
}



