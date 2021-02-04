// 551. Student Attendance Record I
// You are given a string representing an attendance record for a student. The record only contains the following three characters:
// 'A' : Absent.
// 'L' : Late.
// 'P' : Present.
// A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

const checkRecord = (s: string): boolean => {
  let countOfAs = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') countOfAs++;
    if (s[i] === s[i + 1] && s[i + 1] === s[i + 2] && s[i] === 'L') return false;

    if (countOfAs > 1) return false;
  }

  return true;
};
