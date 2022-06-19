import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  uri:String="http://localhost:3000/api";
  private  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
    })
  };
  getcontacts():Observable<Contact[]>{
    const url =`${this.uri}/contacts`;
    return this.http
    .get<Contact[]>(url);
  }
  createcontact(data: any): Observable<any> {
    const url =`${this.uri}/contacts`;
    return this.http.post(url, data);
  }
  deletecontact(id: string): Observable<any> {
    return this.http.delete(`${this.uri}/contacts/${id}`);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.uri}/contacts/${id}`, data);
  }
}
