const outed = (meet, boss) => {
  if (!meet || !boss) return 'Get Out Now!';
  const totalHappiness = Object.entries(meet).reduce(
    (acc, [name, happiness]) => (name === boss ? acc + happiness * 2 : acc + happiness),
    0
  );
  const length = Object.keys(meet).length;

  return totalHappiness / length <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
};
