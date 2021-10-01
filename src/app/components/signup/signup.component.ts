import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  signupForm: FormGroup;

  name: FormControl;
  surname1: FormControl;
  surname2: FormControl;
  username: FormControl;
  dateOfBirth: FormControl;
  email: FormControl;
  password: FormControl;
  confirmPassword: FormControl;

  constructor( private formbuilder: FormBuilder ) { 
    this.user = new userNew();

    this.isValidForm = false;
    this.equalPasswords = false;

    this.name = new FormControl( this.user.name, [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
      Validators.pattern('[a-zA-Z ]+')
    ] );
    this.surname1 = new FormControl( this.user.surname1, [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
      Validators.pattern('[a-zA-Z ]+')
    ] );
    this.surname2 = new FormControl( this.user.surname2, [
      Validators.minLength(2),
      Validators.maxLength(30),
      Validators.pattern('[a-zA-Z ]+')
    ] );
    this.username = new FormControl( this.user.username, [
      Validators.required,
      Validators.minLength(5)
    ] );
    this.dateOfBirth = new FormControl( this.user.dateOfBirth, [
      Validators.required
    ] );
    this.email = new FormControl( this.user.email, [
      Validators.required,
      Validators.email
    ] );
    this.password = new FormControl( this.user.password, [
      Validators.required,
      Validators.minLength(6)
    ] );
    this.confirmPassword = new FormControl( this.user.confirmPassword, [
      Validators.required
    ] );
  
    this.signupForm = this.formbuilder.group({
      name: this.name,
      surname1: this.surname1,
      surname2: this.surname2,
      username: this.username,
      dateOfBirth: this.dateOfBirth,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    });
  }

  checkSignup(): void {
    this.equalPasswords = (this.password.value === this.confirmPassword.value);
    this.isValidForm = (this.signupForm.valid) ? true : false;

    this.user.name = this.name.value;
    this.user.surname1 = this.surname1.value;
    this.user.surname2 = this.surname2.value;
    this.user.username = this.username.value;
    this.user.dateOfBirth = this.dateOfBirth.value;
    this.user.email = this.email.value;
    this.user.password = this.password.value;
    this.user.confirmPassword = this.confirmPassword.value;


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
