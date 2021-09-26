import { Component, OnInit } from '@angular/core';
import { userNew } from 'src/app/models/user.new';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  user: userNew;

  constructor() { 
    this.user = new userNew();
  }

  ngOnInit(): void {
  }

  checkSignup(): void {
    console.log(`User data -> 
      Name: ${this.user.name}, 
      Email: ${this.user.email}, 
      Password: ${this.user.password}`
    );
  }
}
