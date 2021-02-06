// https://www.codewars.com/kata/53b2f6934a240823f4000abc

const uniquePush = (arr, obj) => {
  if (obj.phoneNumber === undefined) return false;
  let containsSimilarNumber = false;
  for (let person of arr) {
    if (person.phoneNumber === obj.phoneNumber) containsSimilarNumber = true;
  }

  if (!containsSimilarNumber) arr.push(obj);

  return !containsSimilarNumber ? true : false;
};
