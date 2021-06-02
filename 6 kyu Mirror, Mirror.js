const evilTwin = (obj) => {
	let copy = Object.create(obj);
	copy['hasGoatee'] = true;
	return copy;
};
