// https://www.codewars.com/kata/527a6e602a7db3456e000a2b

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
