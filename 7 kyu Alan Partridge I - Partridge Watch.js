// https://www.codewars.com/kata/5808c8eff0ed4210de000008

const TERMS = {
	Partridge: true,
	PearTree: true,
	Chat: true,
	Dan: true,
	Toblerone: true,
	Lynn: true,
	AlphaPapa: true,
	Nomad: true,
};

const part = (x) => {
	const alanRelatedTerms = x.filter((term) => term in TERMS);
	if (!alanRelatedTerms.length)
		return "Lynn, I've pierced my foot on a spike!!";

	return `Mine's a Pint${'!'.repeat(alanRelatedTerms.length)}`;
};
