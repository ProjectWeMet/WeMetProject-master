import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PagesService } from 'src/app/Service/pages.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  ContactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    //lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
    // userName: new FormControl('', [Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
   
    
    // gender: new FormControl('', [Validators.required]),
    // confirmPassword: new FormControl('', [Validators.required,Validators.minLength(8)])
  })

  onSubmit() {
    debugger
    const data={
      name:this.ContactForm.controls.name.value.toString(),
      email:this.ContactForm.controls.email.value.toString() ,
     
      // lname:  this.ContactForm.controls.lastName.value.toString(),
      phone: this.ContactForm.controls.phone.value.toString(),
      subject:  this.ContactForm.controls.subject.value.toString(),
     
      message:  this.ContactForm.controls.message.value.toString(),
    }
    this.pagesService.contcat(data);
  }
  constructor(public pagesService:PagesService) { }

  ngOnInit(): void {
  }

}