const one = (arr, fun) =>
    arr.map((el) => fun(el)).filter((el) => el == true).length === 1 ? true : false;
