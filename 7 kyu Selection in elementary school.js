const schoolSelection = (arr) =>
  arr.reduce(
    (res, age) => {
      if (age === 5) res['Kindergarten'] += 1;
      if (age === 6) res['1st grade'] += 1;
      if (age === 7) res['2nd grade'] += 1;
      if (age === 8) res['3rd grade'] += 1;
      if (age === 9) res['4th grade'] += 1;
      return res;
    },
    {
      Kindergarten: 0,
      '1st grade': 0,
      '2nd grade': 0,
      '3rd grade': 0,
      '4th grade': 0,
    }
  );
