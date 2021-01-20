const once = (passedFunction) => {
  let wasCalled = false;

  return (...arguments) => {
    if (!wasCalled) {
      wasCalled = !wasCalled;

      return passedFunction(arguments);
    }
  };
};
