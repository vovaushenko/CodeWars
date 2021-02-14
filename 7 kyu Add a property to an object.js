const addProperty = (obj, prop, value) => {
  if (obj[prop]) throw 'hey 🤔';
  if (!prop || !obj || !value) throw '🥺';
  obj[prop] = value;
  return obj;
};
