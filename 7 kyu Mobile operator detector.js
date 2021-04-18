// https://www.codewars.com/kata/55f8ba3be8d585b81e000080

const detectOperator = (a) => {
  let digits = [...(a + '')];
  if (digits.length !== 11) return 'no info';
  const code = digits.slice(1, 4).join('');

  switch (code) {
    case '039':
      return 'Golden Telecom';
    case '050':
      return 'MTS';
    case '063':
      return ' Life:)';
    case '066':
      return 'MTS';
    case '067':
      return 'Kyivstar';
    case '068':
      return 'Beeline';
    case '093':
      return 'Life:)';
    case '095':
      return 'MTS';
    case '096':
      return 'Kyivstar';
    case '097':
      return 'Kyivstar';
    case '098':
      return 'Kyivstar';
    case '099':
      return 'MTS';
    default:
      return 'no info';
  }
};

detectOperator(80931551119);
