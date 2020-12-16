// https://www.codewars.com/kata/57547f9182655569ab0008c4

const replicate = (times, num) => {
  if (times <= 0) return [];
  let result = [];

  const replicator = () => {
    if (result.length === times) return;
    result.push(num);
    replicator();
  };
  replicator();
  return result;
};
