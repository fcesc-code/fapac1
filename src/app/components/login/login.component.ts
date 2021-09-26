import { Component, OnInit } from '@angular/core';
import { userDTO } from 'src/app/models/user.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  user: userDTO;

  constructor() { 
    this.user = new userDTO('', '');
  }

  ngOnInit(): void {
  }

  checkLogin(): void {
    console.log(`User data -> Email: ${this.user.email}, Password: ${this.user.password}`);
  }

}
