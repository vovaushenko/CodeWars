// https://www.codewars.com/kata/57ed56657b45ef922300002b/train/javascript

const broken = (x) => [...x].map((bit) => (bit === '1' ? '0' : '1')).join('');
