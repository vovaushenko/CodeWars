var obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.',
      },
    },
  },
};

Object.prototype.hash = function (route) {
  nestedObj = this;
  let arrRoute = route.split('.');

  let routeFinder = (nested, arrR) => {
    if (arrR.length === 0) {
      res = nested;
      return;
    }
    if (nested[arrR[0]]) {
      routeFinder(nested[arrR[0]], arrR.slice(1));
    } else {
      res = undefined;
      return;
    }
  };

  routeFinder(nestedObj, arrRoute);
  return res;
};

// const getVal = (nestedObj, route) => {
//   let arrRoute = route.split('.');
//   let res;

//   let routeFinder = (nested, arrR) => {
//     if (arrR.length === 0) {
//       res = nested;
//       return;
//     }
//     if (nested[arrR[0]]) {
//       routeFinder(nested[arrR[0]], arrR.slice(1));
//     } else {
//       res = undefined;
//       return;
//     }
//   };

//   routeFinder(nestedObj, arrRoute);
//   console.log(res);
// };

// getVal(obj, 'person.history.bio.funFact.hey');
