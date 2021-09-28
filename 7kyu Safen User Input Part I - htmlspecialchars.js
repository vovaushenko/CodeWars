// https://www.codewars.com/kata/56bcaedfcf6b7f2125001118

const map = { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' };

const htmlspecialchars = (formData) =>
	[...formData].reduce(
		(sanitized, ch) => (ch in map ? (sanitized += map[ch]) : (sanitized += ch)),
		''
	);
