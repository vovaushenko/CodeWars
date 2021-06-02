const evilTwin = (obj) => {
	let copy = Object.create(obj);
	copy['hasGoatee'] = true;
	return copy;
};

let orig = { x: 5 };

let copy = evilTwin(orig);
console.log(orig);
console.log(copy);

orig.x = 'hello';

console.log(orig);
console.log(copy);
