// https://www.codewars.com/kata/5722aeda785220c84900109b

const anchorize = (text) =>
	text
		.split(' ')
		.map((chunk) =>
			chunk.includes('://') ? `<a href="${chunk}">${chunk}</a>` : chunk
		)
		.join(' ');

const anchorize = (t) =>
	t.replace(/(https?|ftps?|file|smb)\S+/gi, '<a href="$&">$&</a>');
