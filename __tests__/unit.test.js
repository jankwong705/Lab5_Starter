// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';
  
// TODO - Part 2
 
//Test isPhoneNumber
test('expect 858-731-9999 true', () => {
  expect(isPhoneNumber('858-731-9999')).toBe(true);
});

test('expect (858)731-9999 true', () => {
  expect(isPhoneNumber('(858)731-9999')).toBe(true);
});

test('expect 85885758553 false', () => {
  expect(isPhoneNumber('85885758553')).toBe(false);
});

test('expect 8588558553 false', () => {
  expect(isPhoneNumber('858855855')).toBe(false);
});

//test isEmail
test('expect jankwong705@gmail.com true', () => {
  expect(isEmail('jankwong705@gmail.com')).toBe(true);
});

test('expect jykwong@ucsd.edu true', () => {
  expect(isEmail('jykwong@ucsd.edu')).toBe(true);
});

test('expect jykwongucsd.edu false', () => {
  expect(isEmail('jykwongucsd.edu')).toBe(false);
});

test('expect jykwong@ucsdedu false', () => {
  expect(isEmail('jykwong@ucsdedu')).toBe(false);
});

//test isStrongPassword
test('expect A88888_2 true', () => {
  expect(isStrongPassword('A88888_2')).toBe(true);
});

test('expect A888 true', () => {
  expect(isStrongPassword('A888')).toBe(true);
});

test('expect A8 false', () => {
  expect(isStrongPassword('A8')).toBe(false);
});

test('expect Adkjfdsfhduhkdsff8 false', () => {
  expect(isStrongPassword('Adkjfdsfhduhkdsff8')).toBe(false);
});

//test isDate
test('expect 02/02/2002 true', () => {
  expect(isDate('02/02/2002')).toBe(true);
});

test('expect 02/12/2012 true', () => {
  expect(isDate('02/12/2012')).toBe(true);
});

test('expect 02122012 false', () => {
  expect(isDate('02122012')).toBe(false);
});

test('expect 11 false', () => {
  expect(isDate('11')).toBe(false);
});

//test isHexColor
test('expect #3F7CDE true', () => {
  expect(isHexColor('#3F7CDE')).toBe(true);
});

test('expect 000 true', () => {
  expect(isHexColor('000')).toBe(true);
});

test('expect 11 false', () => {
  expect(isHexColor('11')).toBe(false);
});

test('expect #FGH false', () => {
  expect(isHexColor('#FGH')).toBe(false);
});