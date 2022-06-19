import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/contact.service';
import { Contact } from 'src/app/models/contact.model';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent implements OnInit {
  card:Array<Contact> = new Array<Contact>();
  constructor(private contactservice:ContactService) {
    this.reviewcontacts()

   }
  reviewcontacts(){
    this.contactservice.getcontacts()
    .subscribe({
      next: (data)=>{
        this.card=data;
        console.log(data);
      },
      error:(e)=>console.log(e)
    });
    
  }
  
  

  ngAfterViewInit() {
    
  }
 

  ngOnInit(): void {
  }

}
