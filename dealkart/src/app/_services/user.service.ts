import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  register(value: any) {
    throw new Error('Method not implemented.');
  }
  PATH_OF_API = 'http://localhost:9090';

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService
  ) {}

  public login(loginData: any) {
    return this.httpclient.post(this.PATH_OF_API + '/authenticate', loginData, {
      headers: this.requestHeader,
    });
  }

  public forUser() {
    return this.httpclient.get(this.PATH_OF_API + '/forUser', {
      responseType: 'text',
    });
  }


  public forAdmin() {
    return this.httpclient.get(this.PATH_OF_API + '/forAdmin', {
      responseType: 'text',
    });
  }
  public roleMatch(allowedRoles: any) :boolean{
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();
    if(userRoles) {
      for(let i = 0; i<userRoles.length; i++) {
        if(allowedRoles.indexOf(userRoles[i].roleName) === -1){
         isMatch = true;
        //  console.log(allowedRoles.indexOf(userRoles[i].roleName));
        //  console.log(isMatch);
         break;
        }
      }
    }
    return isMatch;
    }
  // public roleMatch(allowedRoles: any):boolean {
  //   let isMatch=true;
  //   const userRoles: any = this.userAuthService.getRoles;

  //   if (userRoles != null && userRoles) {
  //     for (let i = 0; i < userRoles.length; i++) {
  //       for (let j = 0; j < allowedRoles.length; j++) {
  //         if (userRoles[i].roleName === allowedRoles[j]) {
  //           isMatch = false;
  //           console.log("inside loop");
  //           break;
  //         }
  //       }
  //     }
  //   }
  //   return isMatch;
  // }
}
