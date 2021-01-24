// https://www.codewars.com/kata/54402d52cf3625b882000141

function createSSP(password) {
  const superSecretChars = {
    a: '@',
    s: '$',
    o: '0',
    h: '5',
    x: '*',
  };

  return [...password]
    .map((char) => (superSecretChars[char.toLowerCase()] ? superSecretChars[char] : char))
    .join('');
}
