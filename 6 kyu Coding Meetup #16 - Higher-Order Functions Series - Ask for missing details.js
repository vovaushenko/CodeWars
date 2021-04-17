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
