// https://www.codewars.com/kata/52742f58faf5485cae000b9a
// 4 kyu

const formatDuration = (seconds) => {
  let [years, days, hours, minutes] = [0, 0, 0, 0];
  // while (seconds - 31622400 >= 0) {
  //   seconds -= 31622400;
  //   years++;
  // }
  years = Math.trunc(seconds / 31622400);
  seconds = seconds % 31622400;
  console.log(seconds);

  while (seconds - 86400 > 0) {
    seconds -= 86400;
    days++;
  }

  while (seconds - 3600 >= 0) {
    seconds -= 3600;
    hours++;
  }
  while (seconds - 60 >= 0) {
    seconds -= 60;
    minutes++;
  }

  console.log(years, days, hours, minutes);

  // let humanReadableHours = hours ? (hours > 1 ? `${hours} hours` : `${hours} hour`) : '';
  // let humanReadableMinutes = minutes
  //   ? minutes > 1
  //     ? `${minutes} minutes`
  //     : `${minutes} minute`
  //   : '';
  // let humanReadableSeconds = seconds
  //   ? seconds > 1
  //     ? `${seconds} seconds`
  //     : `${seconds} second`
  //   : '';

  // const result = [humanReadableHours, humanReadableMinutes, humanReadableSeconds].filter((c) => c);

  // if (result.length === 1) return result.join(' ');
  // if (result.length === 2) return result.join(' and ');

  // return `${humanReadableHours}, ${humanReadableMinutes} and ${humanReadableSeconds}`;
};

console.log(formatDuration(205851834));
