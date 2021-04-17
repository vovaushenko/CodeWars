// https://www.codewars.com/kata/583d972b8bbc0402cf000121

const askForMissingDetails = (list) =>
  list
    .filter((developer) => Object.values(developer).includes(null))
    .map((developer) => ({
      ...developer,
      question: `Hi, could you please provide your ${
        Object.entries(developer).find(([_, val]) => val === null)[0]
      }.`,
    }));

console.log(
  askForMissingDetails([
    {
      firstName: null,
      lastName: 'I.',
      country: 'Argentina',
      continent: 'Americas',
      age: 35,
      language: 'Java',
    },
    {
      firstName: 'Lukas',
      lastName: 'X.',
      country: 'Croatia',
      continent: 'Europe',
      age: 35,
      language: null,
    },
    {
      firstName: 'Madison',
      lastName: 'U.',
      country: 'United States',
      continent: 'Americas',
      age: 32,
      language: 'Ruby',
    },
  ])
);
