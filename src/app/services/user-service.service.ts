import { UserRegistration } from './../shared/models/userRegistration';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private http: HttpClient) {

   }

  postUserRegistrationForm(userRegistration: UserRegistration): Observable<any>{
  return this.http.post('url',userRegistration);
  }
}
