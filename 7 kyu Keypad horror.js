// https://www.codewars.com/kata/5572392fee5b0180480001ae

const computerToPhone = (nums) => {
  const PC_TO_PHONE = {
    1: 7,
    2: 8,
    3: 9,
    4: 4,
    5: 5,
    6: 6,
    7: 1,
    8: 2,
    9: 3,
    0: 0,
  };

  let result = [...nums].map((digit) => PC_TO_PHONE[digit]).join('');

  return result;
};
