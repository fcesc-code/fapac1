import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { userNew } from 'src/app/models/user.new';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent {
  user: userNew;
  isValidForm: boolean;

  constructor() { 
    this.user = new userNew();
    this.isValidForm = false;
  }

  checkSignup(form: NgForm): void {
    this.isValidForm = Boolean(form.valid);
    this.devPrintUserData(this.user);
  }

  private devPrintUserData(someUser: userNew): void {
    let userData = 'User data for dev purposes: \n';
    console.table(someUser);
  }
}
