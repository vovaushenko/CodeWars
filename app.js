// https://www.codewars.com/kata/56f5594a575d7d3c0e000ea0

const conferencePicker = (citiesVisited, citiesOffered) =>
  citiesOffered.find((city) => !citiesVisited.includes(city));

conferencePicker(
  ['Mexico City', 'Johannesburg', 'Stockholm', 'Osaka', 'Saint Petersburg', 'London'],
  ['Stockholm', 'Paris', 'Melbourne']
);
