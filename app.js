const outed = (meet, boss) => {
  if (!meet || !boss) return 'Get Out Now!';
  const totalHappiness = Object.entries(meet).reduce(
    (acc, [name, happiness]) => (name === boss ? acc + happiness * 2 : acc + happiness),
    0
  );
  const length = Object.keys(meet).length;

  return totalHappiness / length <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
};

console.log(
  outed(
    {
      tim: 2,
      jim: 4,
      randy: 0,
      sandy: 5,
      andy: 8,
      katie: 6,
      laura: 2,
      saajid: 2,
      alex: 3,
      john: 2,
      mr: 8,
    },
    'john'
  )
);
