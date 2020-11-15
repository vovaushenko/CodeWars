// https://www.codewars.com/kata/514a024011ea4fb54200004b

const domainName = (str) => {
  if (str.includes('//')) {
    let withoutHttp = str.split('//');
    let noHtttp = withoutHttp[1].split('.');
    if (noHtttp.length === 2) {
      return noHtttp[0];
    }
    return noHtttp.filter((el) => el.length > 3)[0];
  } else {
    let domain = str.split('.').filter((el) => el.length > 3);
    return domain[0];
  }
};
