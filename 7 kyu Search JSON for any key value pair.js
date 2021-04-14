const getCharacters = (obj, key, val) => {
  if (!(key in obj.characters[0])) return false;

  return obj.characters.filter((person) => person[key].toLowerCase() === val.toLowerCase());
};
