function isPalindrome(x) {
  //Recursive version
  let palindrome = '';

  function letsMakeOurPalindrome(input) {
    if (input.length === 0) {
      return;
    }

    palindrome += input[input.length - 1];
    letsMakeOurPalindrome(input.slice(0, -1));
  }

  letsMakeOurPalindrome(x);

  return palindrome.toLowerCase() === x.toLowerCase() ? true : false;
}

console.log(isPalindrome('Abba'));
