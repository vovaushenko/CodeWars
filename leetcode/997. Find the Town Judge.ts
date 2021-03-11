// 997. Find the Town Judge
// In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.

// If the town judge exists, then:

// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

// If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.

function findJudge(N: number, trust: number[][]): number {
  if (N === 1 && trust.length === 0) return 1;
  const trustCounter: { [key: string]: number } = {};

  for (let pair of trust) {
    trustCounter[pair[1]] ? trustCounter[pair[1]]++ : (trustCounter[pair[1]] = 1);
  }

  let possibleJudge;
  for (let key in trustCounter) {
    if (trustCounter[key] === N - 1) possibleJudge = +key;
  }

  if (possibleJudge === undefined) return -1;

  for (let pair of trust) {
    if (pair[0] === possibleJudge) return -1;
  }

  return possibleJudge;
}
