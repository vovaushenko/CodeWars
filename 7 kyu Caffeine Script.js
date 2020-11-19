// https://www.codewars.com/kata/5434283682b0fdb0420000e6

function caffeineBuzz(n){
  if (n % 12 == 0) return "CoffeeScript";
  if (n % 6 == 0) return "JavaScript";
  if (n % 3 == 0) return "Java";
  return "mocha_missing!";
}

