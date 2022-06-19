import { ContactService } from './../../contact.service';
import { AddContactComponent } from './../../modules/add-contact/add-contact.component';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from './../../shared/shared/shared.module';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import{MatPaginatorModule} from '@angular/material/paginator'
import{MatTableModule} from '@angular/material/table'

import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {  MatInputModule } from '@angular/material/input';
import { ContactsComponent } from 'src/app/modules/contacts/contacts.component';
import { ContactCardComponent } from 'src/app/contact-card/contact-card.component';
import { HttpClientModule } from '@angular/common/http';






@NgModule({
  declarations: [
    DefaultComponent,
    ContactsComponent,
    AddContactComponent,
    ContactCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    HttpClientModule
    

   
  ],
  providers:[ContactService]
})
export class DefaultModule { }
