//https://www.codewars.com/kata/551dc350bf4e526099000ae5

function songDecoder(song) {
  //lets detect all WUB's
  re = /WUB/g;

  const withoutWub = song.replace(re, ' ');

  //replace multiple spaces with a single space
  let solution = withoutWub.replace(/  +/g, ' ');
  return solution.trim();
}
