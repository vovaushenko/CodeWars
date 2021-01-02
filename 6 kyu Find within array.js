// https://www.codewars.com/kata/51f082ba7297b8f07f000001


var findInArray = function(array, iterator) {
    let count;
    for (let i = 0; i < array.length; i++) {
      if (iterator(array[i], i)) {
        count = i;
        break;
      }array.map((v,i)=>iterator(v,i)).indexOf(true)
    }
    if (count || count === 0) return count
    return -1
  };