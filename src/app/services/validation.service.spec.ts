import { TestBed } from '@angular/core/testing';

import { ValidationService } from './validation.service';

describe('ValidationService', () => {
  let service: ValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidationService);
  });

  it('ValidationService should be created', () => {
    expect(service).toBeTruthy();
  });

  // describe('hasNumber method tests', () => {

  //   it('Method hasNumber should return null if a given string has at least a number character', () => {
  //     const TEST = 'OnceUponATime1';
  //     const RESULT = service.hasNumbers(TEST);
  
  //     expect(RESULT).toBe(null);
  //   })
  
  //   it('Method hasNumber should return an object containing an error if it has no number characters', () => {
  //     const TEST = 'OnceUponATimeNoNumber';
  //     const RESULT = service.hasNumbers(TEST);
  
  //     expect(RESULT).not.toBe(null);
  //     expect(RESULT).toEqual({ 'hasNotNumbers': true });
  //   })
  // });

  // describe('hasUpperCase method tests', () => {

  //   it('Method hasUpperCase should return null if a given string has at least one uppercase character', () => {
  //     const TEST = 'OnceUponATimeInUpperCase';
  //     const RESULT = service.hasUpperCase(TEST);
  
  //     expect(RESULT).toBe(null);
  //   })
  
  //   it('Method hasUpperCase should return an object containing an error if it has no uppercase characters', () => {
  //     const TEST = 'oneuponatimeinlowercase';
  //     const RESULT = service.hasUpperCase(TEST);
  
  //     expect(RESULT).not.toBe(null);
  //     expect(RESULT).toEqual({ 'hasNotUpperCase': true });
  //   })
  // });

  // describe('hasLowerCase method tests', () => {

  //   it('Method hasLowerCase should return null if a given string has at least one lowercase character', () => {
  //     const TEST = 'oneuponatimeinlowercase';
  //     const RESULT = service.hasLowerCase(TEST);
  
  //     expect(RESULT).toBe(null);
  //   })
  
  //   it('Method hasLowerCase should return an object containing an error if it has no lowercase characters', () => {
  //     const TEST = 'OnceUponATimeInUpperCase';
  //     const RESULT = service.hasLowerCase(TEST);
  
  //     expect(RESULT).not.toBe(null);
  //     expect(RESULT).toEqual({ 'hasNotLowerCase': true });
  //   })
  // });

  // describe('hasSpecialCharacter method tests', () => {

  //   it('Method hasSpecialCharacter should return null if a given string has at least one special character', () => {
  //     const TEST = 'OnceUponATimeWith#';
  //     const RESULT = service.hasSpecialCharacter(TEST);
  
  //     expect(RESULT).toBe(null);
  //   })
  
  //   it('Method hasSpecialCharacter should return an object containing an error if it has no special characters', () => {
  //     const TEST = 'OnceUponATimeWithoutSpecialCharacter';
  //     const RESULT = service.hasSpecialCharacter(TEST);
  
  //     expect(RESULT).not.toBe(null);
  //     expect(RESULT).toEqual({ 'hasNotSpecialCharacter': true });
  //   })
  // });

});
