import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class ValidationService {

  hasNumbers(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const REGEXP: RegExp = /\d/;
      const VALIDATIONERROR: ValidationErrors = { 'hasNotNumbers': true };
      return ( REGEXP.test(control.value) ) ? null : VALIDATIONERROR;
    }
  }

  hasUpperCase(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const REGEXP: RegExp = /[A-Z]/;
      const VALIDATIONERROR: ValidationErrors = { 'hasNotUpperCase': true };
      return ( REGEXP.test(control.value) ) ? null : VALIDATIONERROR;
    }
  }

  hasLowerCase(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const REGEXP: RegExp = /[a-z]/;
      const VALIDATIONERROR: ValidationErrors = { 'hasNotLowerCase': true };
      return ( REGEXP.test(control.value) ) ? null : VALIDATIONERROR;
    }
  }

  hasSpecialCharacter(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const REGEXP: RegExp = /[\\\/\*¿\?\^\$-+=#\!¡\[\]\(\)_:;,\.%\'\"<>~@\&€¥£|ºª¨´`]/;
      const VALIDATIONERROR: ValidationErrors = { 'hasNotSpecialCharacter': true };
      return ( REGEXP.test(control.value) ) ? null : VALIDATIONERROR;
    }
  }  

}