import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {
  @Input() id:string;
  @Input() firstName:string;
  @Input() lastName:string;
  @Input() email:string;
  @Input() type:string;
  @Input() description:string;
  @Input() phone:string;
  @Input() src:string;
  constructor() { }

  ngOnInit(): void {
  }

}
