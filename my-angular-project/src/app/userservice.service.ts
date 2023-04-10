import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './login/users';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private baseUrl="http://localhost:8080/user/login";
  constructor(private http: HttpClient) {}

  getUserData(users: Users):Observable<object>{
    console.log(users);
    return this.http.post('$(this.baseUrl)',users);
  }
}
