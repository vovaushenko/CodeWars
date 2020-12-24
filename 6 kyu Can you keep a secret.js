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