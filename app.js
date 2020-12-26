const alphanumeric = (str) => {
  if (!str.length) return false;
  const ALLOWED_CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  for (let char of str) {
    if (!ALLOWED_CHARS.includes(char)) return false;
  }
  return true;
};

console.log(alphanumeric('dasda sa'));
