import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
    
   contactform: FormGroup;
   

   constructor(private fb: FormBuilder, private toastr: ToastrService ) {

   let controls= ({
    from_name: '',
    to_name:'admin',
    firstName: new FormControl ('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-ZàâäéèêëîïôöùûüçÀÂÄÉÈÊËÎÏÔÖÙÛÜÇ]+$')]) ,
    lastName : new FormControl ('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-ZàâäéèêëîïôöùûüçÀÂÄÉÈÊËÎÏÔÖÙÛÜÇ]+$')]) ,
    phone: new FormControl ('', [Validators.required ]),
    subject: new FormControl ('', [Validators.required, Validators.minLength(5), Validators.pattern('^[a-zA-ZàâäéèêëîïôöùûüçÀÂÄÉÈÊËÎÏÔÖÙÛÜÇ]+ $') ]) ,
    email: new FormControl ('', [Validators.required, Validators.email]) ,
    message: new FormControl ('', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]) ,
  });

  this.contactform=this.fb.group(controls)
}

  

async send() {
    emailjs.init("Z0alKBaWagoqsaTc-");
    let response= await emailjs.send("Gmail_Service_ID","template_vip5kim",{
    from_name: this.contactform.value.firstName,
    to_name: this.contactform.value.to_name,
    phone: this.contactform.value.phone,
    subject: this.contactform.value.subject,
    message: this.contactform.value.message,
    first_name: this.contactform.value.firstName,
    last_name: this.contactform.value.lastName,
    email: this.contactform.value.email,
    });
    
    this.contactform.reset({
      firstName: '' ,
    lastName: '',
    phone: '',
    subject: '' ,
    email: '' ,
    message: '' ,
    })
 }

 error(){
  if(this.contactform.invalid){
  this.toastr.error('Please enter a valid informations');
  }
 }

}
