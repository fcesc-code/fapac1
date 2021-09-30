import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { userDTO } from 'src/app/models/user.dto';
import { checkReservedKeyword } from 'src/app/directives/check-reserved-keyword.validator';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent {
  user: userDTO;
  email: FormControl;
  password: FormControl;
  signinForm: FormGroup;
  private reservedKeyword: RegExp = /^.+@uoc.edu$/;

  constructor( private formbuilder: FormBuilder ) { 
    this.user = new userDTO('', '');
    this.email = new FormControl( this.user.email, [
      Validators.required,
      checkReservedKeyword(this.reservedKeyword)
    ]);
    this.password = new FormControl( this.user.password, 
      Validators.required 
    );
    
    this.signinForm = this.formbuilder.group({
      email: this.email,
      password: this.password
    })
  }

  checkSignin(){
    this.user.email = this.email.value;
    this.user.password = this.password.value;
  }

}
