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
  equalPasswords: boolean;

  constructor() { 
    this.user = new userNew();
    this.isValidForm = false;
    this.equalPasswords = false;
  }

  checkSignup(form: NgForm): void {
    this.equalPasswords = (form.value.password === form.value.confirmPassword);
    this.isValidForm = (form.valid) ? true : false;

    this.devPrintUserData(this.user);
  }

  private devPrintUserData(someUser: userNew): void {
    let userData = 'User data for dev purposes: \n';
    let formError = 'Invalid form';
    let differentPasswordsError = 'Passwords do not match';

    console.log(userData);
    if (!this.equalPasswords) console.error(differentPasswordsError);
    this.isValidForm 
      ? console.table(someUser) 
      : console.error(formError);
  }
}
