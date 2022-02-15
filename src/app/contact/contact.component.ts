import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

 
  sendMailUrl;
  

  form = this.fb.group({
    name: this.fb.control('', [Validators.required]),
    email: this.fb.control('', [Validators.required, Validators.email]),
    message: this.fb.control('')
  })

  constructor(private fb:FormBuilder) { 

 
    
    this.sendMailUrl = 'https://gurpreet-singh.developerakadamie.com/send_mail.php';
    
   
   }

  

  ngOnInit(): void {
  }
  
  senden() {
    console.log(this.form.value);
    let formData = new FormData()
      formData.append('name', this.form.get('name')?.value);
      formData.append('email', this.form.get('email')?.value);
      formData.append('message', this.form.get('message')?.value);

    fetch(this.sendMailUrl, {
      method: "POST",
      body: formData
    })

}
}
