const getCharacters = (obj, key, val) => {
  if (!(key in obj.characters[0])) return false;

  return obj.characters.filter((person) => person[key].toLowerCase() === val.toLowerCase());
};

getCharacters(
  {
    characters: [
      { name: 'Dipper Pines', age: '12', speciality: 'adventurer' },
      { name: 'Mabel Pines', age: '12', speciality: 'energetic optimist' },
      { name: 'Grunkle Stan', age: 'Unknown', speciality: 'shyster' },
      { name: 'Soos Ramirez', age: '22', speciality: ' lovable man-child' },
      { name: 'Wendy Corduroy', age: '15', sspeciality: 'sociable and nonchalant' },
      { name: 'Waddles', age: 'Unknown', speciality: 'pig stuff' },
      { name: 'Tambry', age: '15', speciality: 'sociable and nonchalant' },
    ],
  },
  'favColour',
  'Grey'
);
