const getFirstPython = (list) => {
  const pythonDevs = list.filter((dev) => dev.language === 'Python');
  if (!pythonDevs.length) return 'There will be no Python developers';
  const { firstName, country } = pythonDevs[0];
  return `${firstName}, ${country}`;
};
