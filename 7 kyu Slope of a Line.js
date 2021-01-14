// https://www.codewars.com/kata/53222010db0eea35ad000001

const getSlope = (p1, p2) => (p2[0] == p1[0] ? null : (p2[1] - p1[1]) / (p2[0] - p1[0]));
