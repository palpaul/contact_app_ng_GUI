import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../classes/contact';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl ="http://localhost:8081";
  
  constructor(private httpClient: HttpClient){}

  //create one method createcontact() its make a post request to save the contact
  createContact(contact: Contact):Observable<string>{
return this.httpClient.post(`${this.baseUrl}/contact`,contact,{responseType:"text"})
  }

  //get request its amke a get request to fetch the contacts
  getAllContacts():Observable<Contact[]>{
   return this.httpClient.get<Contact[]>(`${this.baseUrl}/contacts`)
  }


  //get request based on id
  findContactById(id:number):Observable<Contact>{
   return this.httpClient.get<Contact>(`${this.baseUrl}/contact/${id}`)
  }

  //delete
  deleteContactById(id:number):Observable<string>{
   return this.httpClient.delete(`${this.baseUrl}/contact/${id}`, {responseType:"text"});
  }

  // put request update the contacts
  // updateContact(contact:Contact):Observable<string>{
  //  return this.httpClient.put(`${this.baseUrl}/contact/${contact.id}`,contact, {responseType:"text"})
  // }

}
