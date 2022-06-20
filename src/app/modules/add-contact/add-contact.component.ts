import { ContactService } from 'src/app/contact.service';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  contact: Contact = {
    
    name: {
      firstName: '',
      lastName: '',
    },
    email: '',
    src:'data:image/png;base64,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',
    type: 'Friend',
    description: '',
    phone: '1000000',
    _id: undefined,
  };
  
  @Output()fn:String
  @Output()ln:String
  @Output()phone:String
  @Output()email:String
  @Output()description:String
  @Output()type:String

  constructor(private contactservice:ContactService ,private router : Router) { }

  ngOnInit(): void {
  }
print(fn,ln,phone,email,description,type:String){
  this.fn=fn;
  this.description=description;
  this.email=email;
  this.ln=ln;
  this.phone=phone
  this.type=type
}

cntcttyp:string;

addcontact() {
  this.contact.type=this.cntcttyp
  this.contactservice.createcontact(this.contact).subscribe({
    next: (data) => {
      console.log(data);
      this.router.navigate(['/contacts']);
    },
    error: (e) => console.log(e),
  });
}
}
