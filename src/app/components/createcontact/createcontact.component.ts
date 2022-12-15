import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/classes/contact';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'app-createcontact',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.css']
})
export class CreatecontactComponent implements OnInit{

  //
  ngOnInit(): void {}


  constructor(private contactService:ContactService,private router:Router){}


  //creating the Contact class object , just to represent our form data (user input)
  contact:Contact = new Contact();
  msg:string="";
  //create one saveContact, inside this method we will call our services method ok and this method  saveContact() ,which we have created we will call in our component template ok 


//why we addded this onSubmit metheod here?
  onSubmit(){
    console.log(this.contact);
    this.saveContact();
  }

  saveContact(){
    this.contactService.createContact(this.contact).subscribe(
      response=>{
      console.log("SUCCESSFULL........saved");
      console.log(response);
      this.redirectToContactList();
      this.msg=response;
    },
    error=>{
        console.log("contact save failed.......");
        console.log(error);

    });
  }
  //redirectTo
  redirectToContactList(){
    this.router.navigate(['/contacts']);
  }


}
