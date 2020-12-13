const hammingWeight = (num) => [...(num.toString(2) + '')].filter((num) => Number(num)).length;

console.log(hammingWeight(1867824 ));
