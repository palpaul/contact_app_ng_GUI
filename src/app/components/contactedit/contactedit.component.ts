import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/classes/contact';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'app-contactedit',
  templateUrl: './contactedit.component.html',
  styleUrls: ['./contactedit.component.css']
})
export class ContacteditComponent implements OnInit{


  constructor(private contactService: ContactService, private router:Router,
    private activeRouter:ActivatedRoute){}

  contact:Contact = new Contact();
    id:number=0;

  ngOnInit(): void {
    this.getContact();
  }
  

  getContact(){
    this.id=this.activeRouter.snapshot.params['id'];
    console.log("UPDATED ID ::"+this.id);
    this.contactService.findContactById(this.id).subscribe(
      data=>{
        console.log("GETTING A CONTACT..");
        console.log(data);
        this.contact=data;
      },
      error=>{
        console.log("SOMETHING WENT WRONG DURING GETTING A CONTACT..");
        console.log(error);  
      }
    );
  }

  updateContact(){
    console.log("Contact Updated.....");
    this.contactService.createContact(this.contact).subscribe(
      data=>{
        console.log("UPDATING A CONTACT..");
        console.log(data);
        this.router.navigate(['/contacts'])
      },
      error=>{
        console.log("SOMETHING WENT WRONG DURING UPDATING A CONTACT..");
        console.log(error);
      });
  }

}
