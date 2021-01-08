// https://www.codewars.com/kata/59b11f57f322e5da45000254

const onesComplement = (bin) =>[...(bin + '')].map((bit) => (bit === '0' ? (bit = '1') : (bit = '0'))).join('');
