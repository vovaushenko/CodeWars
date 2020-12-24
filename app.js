// https://www.codewars.com/kata/5351b35ebaeb67f9110012d2/train/javascript

const createSecretHolder = (secret) => {
  return {
    getSecret: () => {
      return secret;
    },
    setSecret: (newSecret) => {
      secret = newSecret;
    },
  };
};

let obj = createSecretHolder(5);

console.log(obj);

console.log(obj.getSecret());
console.log(obj.setSecret(2));
console.log(obj.getSecret());
