
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

 
  contactData = {
    name: '', 
    email: '', 
    message: '', 
  };

  post = {
  
    endPoint: 'https://gurpreet-singh.developerakademie.com/send_mail.php',
  
    body: (payload: any) => JSON.stringify(payload),
   
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };




  // sendMailUrl;
  

  // form = this.fb.group({
  //   name: this.fb.control('', [Validators.required]),
  //   email: this.fb.control('', [Validators.required, Validators.email]),
  //   message: this.fb.control('')
  // })

  constructor(private http: HttpClient ) { 

 
    
    // this.sendMailUrl = 'https://gurpreet-singh.developerakademie.com/send_mail.php';
    
   
   }

  

  ngOnInit(): void {
  }
  
  onSubmit(ngForm: any) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => console.log(response),
          error: (error) => console.error(error),
          complete: () => console.info('send post complete'),
        });
    }
  }
//  senden() {
//     console.log(this.form.value);
//     let formData = new FormData()
//       formData.append('name', this.form.get('name')?.value);
//       formData.append('email', this.form.get('email')?.value);
//       formData.append('message', this.form.get('message')?.value);

//     fetch(this.sendMailUrl, {
//       method: "POST",
//       body: formData
//     })

// }
}
