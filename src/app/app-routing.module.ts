
import { DefaultComponent } from './layouts/default/default.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './modules/contacts/contacts.component';
import { AddContactComponent } from './modules/add-contact/add-contact.component';


const routes: Routes = [{
  path:'',
  component:DefaultComponent,
  children:[{
    path:'',
    component: ContactsComponent
  },{
    path:'contacts',
    component: ContactsComponent
  },{
    path:'contacts/addcontact',
    component: AddContactComponent,
    
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
