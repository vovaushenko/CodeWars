// qSort

const randomArray = Array.from({ length: 25 }, () => ~~(Math.random() * 15));

const qSort = (arr) => {
  if (arr.length < 2) return arr;
  let index = ~~(Math.random() * arr.length);
  let pivot = arr[index];
  let less = [];
  let greater = [];
  r;

  for (let i = 0; i < arr.length; i++) {
    if (i !== index) {
      arr[i] <= pivot ? less.push(arr[i]) : greater.push(arr[i]);
    }
  }

  return [...qSort(less), pivot, ...qSort(greater)];
};
console.log(qSort(randomArray));
