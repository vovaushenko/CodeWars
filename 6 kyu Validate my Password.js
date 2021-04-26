// https://www.codewars.com/kata/59c01248bf10a47bd1000046

const validPass = (password) => {
  if (password.length <= 3 || password.length > 20) return 'INVALID';
  const alphanumericChars = password.replace(/[^a-z0-9]/gi, '');
  if (alphanumericChars.length !== password.length) return 'INVALID';

  const letters = password.replace(/[^a-z]/gi, '');
  const digits = password.replace(/[^0-9]/gi, '');

  if (!letters || !digits) return 'INVALID';
  return 'VALID';
};
