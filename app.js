// https://www.codewars.com/kata/the-office-ii-boredom-score

const obj = {
  tim: 'change',
  jim: 'accounts',
  randy: 'canteen',
  sandy: 'change',
  andy: 'change',
  katie: 'IS',
  laura: 'change',
  saajid: 'IS',
  alex: 'trading',
  john: 'accounts',
  mr: 'finance',
};

const BOREDOM_ASSESMENTS = {
  accounts: 1,
  finance: 2,
  canteen: 10,
  regulation: 3,
  trading: 6,
  change: 6,
  IS: 8,
  retail: 5,
  cleaning: 4,
  'pissing about': 25,
};

const boredom = (staff) => {
  const totalBoredom = Object.values(staff).reduce(
    (totalBoredom, p) => totalBoredom + BOREDOM_ASSESMENTS[p],
    0
  );
  if (totalBoredom <= 80) return 'kill me now';
  if (totalBoredom > 100) return 'party time!!';
  return 'i can handle this';
};

console.log(boredom(obj));
