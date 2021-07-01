const isValid = (idn) => {
	if (!idn) return false;
	if (!/[a-z_$]/i.test(idn[0])) return false;
	if (idn.replace(/[a-z0-9_$]/gi, '').length) return false;
	return true;
};
