// https://leetcode.com/problems/defanging-an-ip-address/

/*
1108. Defanging an IP Address
Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".
*/
const defangIPaddr = (address) => address.replace(/\./g, '[.]');
