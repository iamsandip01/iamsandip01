import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Users } from '../login/users';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  users:Users =new Users();

  constructor(private registerService: UserserviceService) { }

  ngOnInit(): void {
  }

  userRegister(){
    console.log(this.users);
    this.registerService.registerUser(this.users).subscribe(data=>{
     alert("Successfully User is register?")
    },error=>alert("Sorry User not register"));
  }
}