// https://www.codewars.com/kata/570e6e32de4dc8a8340016dd

class Lamp {
	constructor(color) {
		this.on = false;
		this.color = color;
	}
	toggleSwitch() {
		this.on = !this.on;
	}

	state() {
		return `The lamp is ${this.on ? 'on' : 'off'}.`;
	}
}
