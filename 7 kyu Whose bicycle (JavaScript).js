// https://www.codewars.com/kata/5a2cb4bff28b820c33000082

const calculateTotalMarks = (diary) =>
  Object.values(diary).reduce((total, mark) => total + mark, 0);

const whoseBicycle = (diary1, diary2, diary3) => {
  const marks = [
    calculateTotalMarks(diary1),
    calculateTotalMarks(diary2),
    calculateTotalMarks(diary3),
  ];

  const bestScoreId = marks.lastIndexOf(Math.max(...marks));
  const mostAcademicallySuccessful =
    bestScoreId === 0 ? 'first' : bestScoreId === 1 ? 'second' : 'third';

  return `I need to buy a bicycle for my ${mostAcademicallySuccessful} son.`;
};
