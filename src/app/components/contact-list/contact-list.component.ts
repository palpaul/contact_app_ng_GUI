import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/classes/contact';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit { 


  constructor(private contactService:ContactService,private router:Router){}

//creating the Contact class obj 
 // contact:Contact = new Contact();
  contacts:Contact[]=[ ];
  delMsg:string="";


  ngOnInit():void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
this.getContacts();

    }

  // create one method to call our servcie method
  getContacts(){
    this.contactService.getAllContacts().subscribe(response=>{
      this.contacts=response;
    })
  }
//edit
  editContact(id:number){
    console.log("Edited: " +id);
    
    this.router.navigate(["/edit",id]);

  }
//delete
  deleteContact(id:number){
this.contactService.deleteContactById(id).subscribe(response=>{
  console.log("Successfull.... deleted");
  console.log(response);
  this.delMsg = response;
  this.getContacts();
},
error=>{
  console.log("Failed.......");
  console.log("error");
})
//after deleting the records we want latest records that why calling thie getContacts() method again. ok

  }
}
