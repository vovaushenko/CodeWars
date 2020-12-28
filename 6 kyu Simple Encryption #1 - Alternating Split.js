// https://www.codewars.com/kata/57814d79a56c88e3e0000786

const encrypt = (text, n) => {
  if (text === null) return null;
  if (n <= 0) return text;
  let counter = 0;
  let encryptedText = '';

  const encrypter = (t) => {
    if (n === counter) return;
    encryptedText = oddPart(t) + evenPart(t);
    counter++;
    encrypter(encryptedText);
  };

  encrypter(text);

  return encryptedText;
};

const decrypt = (encryptedText, n) => {
  if (n <= 0) return encryptedText;
  if (encryptedText === null) return null;
  if (!encryptedText) return encryptedText;
  let counter = 0;
  let decodedTxt = '';

  const helper = (encrTxt) => {
    if (n === counter) return;
    counter++;
    decodedTxt = decrypter(encrTxt);
    helper(decodedTxt);
  };
  helper(encryptedText);

  return decodedTxt;
};

function oddPart(str) {
  return [...str]
    .filter((char, id) => {
      if (id % 2 !== 0) return char;
    })
    .join('');
}
function evenPart(str) {
  return [...str]
    .filter((char, id) => {
      if (id % 2 === 0) return char;
    })
    .join('');
}

function decrypter(encryptedText) {
  let counter = 0;
  let decodedText = '';
  let mid = Math.floor(encryptedText.length / 2);
  let firstPart = encryptedText.slice(0, mid);
  let secondPart = encryptedText.slice(mid);

  let i = 0;
  while (i < firstPart.length) {
    decodedText += secondPart[i];
    decodedText += firstPart[i];
    i++;
  }
  while (i < secondPart.length) {
    decodedText += secondPart[i];
    i++;
  }

  return decodedText;
}
