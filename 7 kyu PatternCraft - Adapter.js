// https://www.codewars.com/kata/56919e637b2b971492000036/train/javascript

class MarioAdapter {
	constructor(mario) {
		this.mario = mario;
	}

	attack(target) {
		target.health -= this.mario.jumpAttack();
	}
}
