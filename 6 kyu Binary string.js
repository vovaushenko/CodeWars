const toBinaryString = (num) => {
  if (!num) return '0';
  let res = '';

  const helper = (n) => {
    if (n < 1) return;

    res += n % 2;

    helper(~~(n / 2));
  };

  helper(num);

  return [...res].reverse().join('');
};
