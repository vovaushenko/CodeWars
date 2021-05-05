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

//   this.div=s=>"<div>"+s+"</div>";
// this.b=s=>"<b>"+s+"</b>";
// this.p=s=>"<p>"+s+"</p>";
// this.a=s=>"<a>"+s+"</a>";
// this.body=s=>"<body>"+s+"</body>";
// this.span=s=>"<span>"+s+"</span>";
// this.title=s=>"<title>"+s+"</title>";
// this.comment=s=>"<!--"+s+"-->";

let g = new HTMLGen();

const par = g.p('Hello, world');
const block = g.div(par);
console.log(block);
