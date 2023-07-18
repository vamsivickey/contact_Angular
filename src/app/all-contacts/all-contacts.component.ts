import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

declare var jQuery : any;

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent {

  term:any;

  allContacts:any;

  editContact:any;

  allAppliedData:any;
  
  constructor(private contactService: ContactService , private router:Router,private toastr: ToastrService) {
    
    this.contactService.getAllContacts().subscribe((data: any)=>{
      console.log(data);
      this.allContacts = data;
    })

    this.editContact = {  firstname:'', lastname:'',email:'', numbers: [] };


  }

  showEditPopup(user: any) {
    this.editContact = user;
    jQuery('#exampleModal').modal('show');
    console.log(this.editContact);

    this.contactService.setMessage(user.id);

  }

  deleteContact(id:any){
    this.contactService.deleteContact(id).subscribe((data)=>{
      const index = this.allAppliedData.findIndex((application:any)=>{
          return application.applicationId === id;
        });
        this.allAppliedData.splice(index,1);
      });
  }


  updateUser() {
    this.contactService.UpdateContact(this.editContact).subscribe();
    console.log(this.editContact);
    this.toastr.success('Sucessfully done..');

  }


  removeNumber(index: number, deletednumber: number) {
    this.editContact.numbers.splice(index, 1);
    // const deleteNumber = this.editContact.numbers.splice(index, 1);
    console.log(index);
    index=index+1;
    console.log(deletednumber);
    var id=this.contactService.getMessage();
    console.log(id);
    this.contactService.deleteContactByNumber(id,deletednumber)

    this.router.navigate(['gettingAllContacts']); 

    this.toastr.success('Sucessfully done..');


   
  }

  addNumber() {
    this.editContact.numbers.push('');
  }


}
