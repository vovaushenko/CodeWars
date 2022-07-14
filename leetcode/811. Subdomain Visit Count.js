//811. Subdomain Visit Count

const subdomainVisits = (cpdomains) => {
	const domainMap = {};
	for (const entry of cpdomains) {
		const [visits, domain] = entry.split(' ');
		const chunks = domain.split('.');

		const subdomain = [];
		for (let j = chunks.length - 1; j >= 0; j--) {
			subdomain.unshift(chunks[j]);
			const subdomainKey = subdomain.join('.');
			if (subdomainKey in domainMap) {
				domainMap[subdomainKey] += Number(visits);
			} else {
				domainMap[subdomainKey] = Number(visits);
			}
		}
	}

	return Object.entries(domainMap).map((entry) => entry.reverse().join(' '));
};
