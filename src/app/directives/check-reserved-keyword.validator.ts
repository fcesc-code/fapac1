import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';

export function checkReservedKeyword( reservedKeyword: RegExp ): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = reservedKeyword.test(control.value);
    return forbidden ? { reservedKeyword: { value: control.value } } : null;
  }
}