const mirror = (obj) =>
  Object.keys(obj).reduce(
    (mirrored, k) => ((mirrored[k] = [...k].reverse().join('')), mirrored),
    {}
  );

console.log(mirror({ abc: 1, bcz: 2 }));

// {
//   const mirrorCopy = {};
//   for (let key in obj) {
//     mirrorCopy[key] = [...key].reverse().join('');
//   }

//   return mirrorCopy;
// };
