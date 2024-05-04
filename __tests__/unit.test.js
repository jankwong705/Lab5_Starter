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

test('expect jykwongucsd.edu true', () => {
  expect(isEmail('jykwongucsd.edu')).toBe(false);
});

test('expect jykwong@ucsdedu true', () => {
  expect(isEmail('jykwong@ucsdedu')).toBe(false);
});