const getAge = (birthDate, nowDate) => {
  console.log(birthDate, nowDate);
  return nowDate.getFullYear() - birthDate.getFullYear();
};

console.log(getAge(2008-02-29T00:00:00.000Z ,2009-02-28T00:00:00.000Z));
