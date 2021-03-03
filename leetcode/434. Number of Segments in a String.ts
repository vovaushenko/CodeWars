// // 434. Number of Segments in a String
// \You are given a string s, return the number of segments in the string.

// A segment is defined to be a contiguous sequence of non-space characters.

const countSegments = (s: string): number => s.split(' ').filter((segment) => segment).length;
