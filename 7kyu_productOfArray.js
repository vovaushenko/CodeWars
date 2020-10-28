//Recursive product of array
function productOfArray(arr) {
  let product = 1;

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    product *= helperInput[0];

    helper(helperInput.slice(1));
  }

  helper(arr);
  return product;
}
