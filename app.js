// https://www.codewars.com/kata/528d36d7cc451cd7e4000339

const mostMoney = (students) => {
  const prosperity = students.map((student) => {
    const personalWealth = student.fives * 5 + student.tens * 10 + student.twenties * 20;
    return { name: student.name, personalWealth };
  });

  const maxWealth = Math.max(...prosperity.map((stud) => stud.personalWealth));

  const wealthiestStudents = prosperity.filter((student) => student.personalWealth === maxWealth);

  return wealthiestStudents.length === 1 ? wealthiestStudents[0].name : 'all';
};

console.log(
  mostMoney([
    { name: 'Andy', fives: 0, tens: 0, twenties: 2 },
    { name: 'Stephen', fives: 0, tens: 4, twenties: 0 },
    { name: 'Eric', fives: 8, tens: 1, twenties: 0 },
    { name: 'David', fives: 2, tens: 0, twenties: 1 },
    { name: 'Phil', fives: 0, tens: 2, twenties: 1 },
  ])
);
