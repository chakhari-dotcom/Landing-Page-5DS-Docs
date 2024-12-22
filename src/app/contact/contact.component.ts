import { Component } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
    
   form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      from_name: '',
      to_name:'admin',
      firstName: ['', Validators.required],
      lastName : ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      subject: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

async send() {
    emailjs.init("Z0alKBaWagoqsaTc-");
    let response= await emailjs.send("Gmail_Service_ID","template_vip5kim",{
    from_name: this.form.value.firstName,
    to_name: this.form.value.to_name,
    phone: this.form.value.phone,
    subject: this.form.value.subject,
    message: this.form.value.message,
    first_name: this.form.value.firstName,
    last_name: this.form.value.lastName,
    email: this.form.value.email,
    });

 }
  
    













  

  // onSubmit() {
  //   if (this.form.valid) {
  //     const formData = this.form.value;
  //     this.http.post('http://localhost:3000/contact', formData).subscribe(
  //       response => {
  //         console.log('Données envoyées avec succès !', response);
  //       },
  //       error => {
  //         console.error('Erreur lors de l’envoi des données', error);
  //       }
  //     );
  //   } else {
  //     console.warn('Veuillez remplir correctement tous les champs.');
  //   }
  // }

}
