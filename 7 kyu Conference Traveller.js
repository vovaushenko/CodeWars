const conferencePicker = (citiesVisited, citiesOffered) =>
  citiesOffered.find((city) => !citiesVisited.includes(city));
