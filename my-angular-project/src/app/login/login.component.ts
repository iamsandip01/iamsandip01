import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Users } from './users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  users:Users =new Users()
  constructor(private userservie: UserserviceService) {}

  ngOnInit(): void {
    
  }
  usersLogin(){
   console.log(this.users);
   this.userservie.getUserData(this.users).subscribe(data=>{
    alert("Login Successfully")
  },error=>("Sorry..Please Enter Correct Username and Password")
   )
  }
}
