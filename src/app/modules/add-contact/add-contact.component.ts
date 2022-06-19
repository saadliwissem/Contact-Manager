import { Component, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  @Output()fn:String
  @Output()ln:String
  @Output()phone:String
  @Output()email:String
  @Output()description:String
  @Output()type:String

  constructor() { }

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
}
