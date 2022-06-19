import { ContactService } from 'src/app/contact.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {
  @Input() id:string;
  @Input() _id:string;
  @Input() firstName:string;
  @Input() lastName:string;
  @Input() email:string;
  @Input() type:string;
  @Input() description:string;
  @Input() phone:string;
  @Input() src:string;
  constructor(private contactservice:ContactService) { }

  ngOnInit(): void {
  }
  deleteContact(): void {
    let reponse = confirm('Voulez-vous supprimer le contact  ' + this.firstName);
    if (reponse) {
      this.contactservice.deletecontact(this._id).subscribe({
        next: (res) => {
          console.log(res);
          window.location.reload();
        },
        error: (e) => console.error(e),
      });
    }
  }

}
