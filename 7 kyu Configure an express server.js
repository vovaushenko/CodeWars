const solution = () => {
	var express = require('express');
	var app = express();
	app.listen(process.env.PORT, process.env.HOST, () => {
		`🔥 Server is listening on port ${process.env.PORT} 🔥`;
	});
};
