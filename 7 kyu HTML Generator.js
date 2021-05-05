// https://www.codewars.com/kata/54eecc187f9142cc4600119e

class HTMLGen {
	constructor() {}

	generateTag(tag, content) {
		return `<${tag}>${content}</${tag}>`;
	}

	div(content) {
		return this.generateTag('div', content);
	}
	p(content) {
		return this.generateTag('p', content);
	}
	b(content) {
		return this.generateTag('b', content);
	}
	a(content) {
		return this.generateTag('a', content);
	}
	body(content) {
		return this.generateTag('body', content);
	}
	span(content) {
		return this.generateTag('span', content);
	}
	title(content) {
		return this.generateTag('title', content);
	}
	comment(content) {
		return `<!--${content}-->`;
	}
}
