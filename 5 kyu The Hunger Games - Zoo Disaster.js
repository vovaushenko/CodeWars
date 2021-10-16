const EATS = {
	antelope: ['grass'],
	'big-fish': ['little-fish'],
	bug: 'leaves',
	bear: ['big-fish', 'bug', 'chicken', 'cow', 'leaves', 'sheep'],
	chicken: ['bug'],
	cow: ['grass'],
	fox: ['chicken', 'sheep'],
	giraffe: ['leaves'],
	lion: ['antelope', 'cow'],
	panda: ['leaves'],
	sheep: ['grass'],
};

const whoEatsWho = (zoo) => {
	const animals = zoo.split(',');
	const log = [zoo];

	const helper = (currentZoo) => {
		if (currentZoo.length < 2) {
			if (currentZoo.length === 1) log.push(...currentZoo);
			return;
		}

		let nextZoo = [];
		for (let i = 0; i < currentZoo.length; i++) {
			const currentAnimal = currentZoo[i];
			const leftAnimal = currentZoo[i - 1];
			const rightAnimal = currentZoo[i + 1];

			if (EATS[currentAnimal] && EATS[currentAnimal].includes(leftAnimal)) {
				console.log(currentAnimal, leftAnimal);
				log.push(`${currentAnimal} eats ${leftAnimal}`);
				nextZoo = [...currentZoo.slice(0, i - 1), ...currentZoo.slice(i)];
				break;
			}
			if (EATS[currentAnimal] && EATS[currentAnimal].includes(rightAnimal)) {
				log.push(`${currentAnimal} eats ${rightAnimal}`);
				nextZoo = [...currentZoo.slice(0, i + 1), ...currentZoo.slice(i + 2)];
				break;
			}
			if (i === currentZoo.length - 1) {
				log.push(currentZoo.join(','));
				return log;
			}
		}

		helper(nextZoo);
	};
	helper(animals);

	return log;
};
