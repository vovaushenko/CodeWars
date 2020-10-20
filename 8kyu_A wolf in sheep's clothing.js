//www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15

https: function warnTheSheep(queue) {
  if (queue[queue.length - 1] === 'wolf') {
    return 'Pls go away and stop eating my sheep';
  }

  let sheepCounter = 0;
  for (let i = queue.length - 1; i > 0; i--) {
    if (queue[i] === 'wolf') {
      break;
    }
    sheepCounter++;
  }
  return `Oi! Sheep number ${sheepCounter}! You are about to be eaten by a wolf!`;
}
