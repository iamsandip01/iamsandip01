import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './login/users';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private loginUrl="http://localhost:8081/user/login";
  private signUpUrl="http://localhost:8081/user/signup";
  
  
  constructor(private httpClient: HttpClient) {}

  getUserData(users: Users):Observable<object>{
    console.log(users);
    return this.httpClient.post(`${this.loginUrl}`,users);
  }
  registerUser(users: Users): Observable<Object> {
    console.log(users);
    return this.httpClient.post(`${this.signUpUrl}`,users);
 }
}
