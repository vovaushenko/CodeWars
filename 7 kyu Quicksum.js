// https://www.codewars.com/kata/569924899aa8541eb200003f/train/javascript

const alphabet = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const quicksum = (packet) => {
	if ([...packet].filter((c) => alphabet.includes(c)).length !== packet.length)
		return 0;

	return [...packet].reduce((s, c, id) => s + alphabet.indexOf(c) * ++id, 0);
};
