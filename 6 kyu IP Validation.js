// https://www.codewars.com/kata/515decfd9dcfc23bb6000006

const isValidIP = (ip) => {
  const octets = ip.split('.');
  if (octets.length !== 4) return false;
  if ([...ip].includes(' ') || [...ip].includes('\n')) return false;

  for (let octet of octets) {
    if (octet.replace(/[^a-zA-Z]+/g, '')) return false;
    if (parseInt(octet) < 0 || parseInt(octet) > 255) return false;
    if (octet[0] === '0' && octet.length != 1) return false;
    if (!octet && octet !== 0) return false;
  }

  return true;
};