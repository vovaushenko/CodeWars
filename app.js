// https://www.codewars.com/kata/517b0f33cd023d848d000001

class Warrior {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }

  strike(enemy, punch) {
    enemy.health = Math.max(0, enemy.health - punch * 10);
  }
}

let ninja = new Warrior('Ninja');
let samurai = new Warrior('Samurai');

console.log(ninja);
console.log(samurai);

ninja.strike(samurai, 5);

console.log(samurai);
