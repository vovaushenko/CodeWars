// https://leetcode.com/problems/defanging-an-ip-address/

const defangIPaddr = (address) => address.replace(/\./g, '[.]');

console.log(defangIPaddr('1.1.1.1'));
