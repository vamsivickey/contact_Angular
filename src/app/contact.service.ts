import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  message:any;

  setMessage(data:any){
    this.message=data;
    }
    getMessage(){
      return this.message;
    }
    

  constructor(private httpClient : HttpClient){

  }  

  //Contact register
  registerContact(contactdetails: any) {
    console.log(contactdetails);
    alert('Contact details registered Sucessfully...')
    return this.httpClient.post('/registerContact', contactdetails);
  }

  //Get All contacts 
  getAllContacts(){
    return this.httpClient.get("/getAllContacts");
  }


  //Get contact by name 
  getContactByName(name:any){
    return this.httpClient.get("/getByName/" + name);
  }


  //Get contact by Number 
  getContactByNumber(number:any){
    return this.httpClient.get("/getByNumber/" + number);
  }


  // Update Contact  
  UpdateContact(editContact: any){
    console.log(editContact);
    // this.toast.success('Contact Updated Successfully' , '')
    return this.httpClient.put('/updateContact', editContact);
  }


  //  Delete contact by Id
  deleteContact(contactId:any){
    // this.toast.success('Contact deleted Successfully' , '')
    return this.httpClient.delete('deleteContact/' + contactId);    
  }
  
  deleteContactByNumber(id: number, number: number){
    const url = `deleteContactByNumber/${id}/${number}`;
    return this.httpClient.delete(url);
  }



  //  Delete contact by mob number
  // deleteContactByNumbers(id:any,PhNumber:any){
  //   // this.toast.success('Contact deleted Successfully' , '')
  //   console.log(id);
  //   console.log(PhNumber);
  //   console.log('Deleted by id before') 
  //   return this.httpClient.delete('deleteContactByNumber/' + id +'/'+ PhNumber);   
  // } 


}
