
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

  fd:FormData = new FormData();


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




  constructor(private http: HttpClient ) { 

 }

  ngOnInit(): void {
  }
  
  onSubmit(ngForm: any) {
    this.fd.append('name', 'name');
    this.fd.append('email', 'email');
    this.fd.append('message', 'message');
   
    if (ngForm.submitted && ngForm.form.valid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.fd))
        .subscribe({
          next: (response) => console.log(response),
          error: (error) => console.error(error),
          complete: () => console.info('send post complete'),
          
        });
       
        console.log(this.contactData);
        ngForm.reset();
    }

   

  //    fetch(this.post.endPoint, {
  //     method: 'POST',
  //   body: this.fd
  //   });
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
 // fetch('URL', {
    //   method: 'POST',
    // body: this.fd
    // });