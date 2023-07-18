import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 
  constructor(private contactService: ContactService, private router:Router) {}
 
  newContact = {
    firstname: '',
    lastname: '',
    email: '',
    numbers: [] as string[] // Represent phone numbers as an array of strings
  };
  
  newPhoneNumber = '';


  onSubmit() {
    this.contactService.registerContact(this.newContact).subscribe(() => {
      // Handle successful creation, e.g., show a success message or navigate to the list page
    }, error => {
      // Handle error, e.g., show an error message
    });

    this.router.navigate(['']);
    // this.toastr.success('Sucessfully done..');


  }

  addPhoneNumber() {
    if (this.newPhoneNumber.trim() !== '') {
      this.newContact.numbers.push(this.newPhoneNumber);
      this.newPhoneNumber = '';
    }
  }
 
 
}
