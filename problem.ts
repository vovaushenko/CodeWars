const pluck = <DataType, KeyType extends keyof DataType>(
	items: DataType[],
	key: KeyType
): DataType[KeyType][] => {
	return items.map((item) => item[key]);
};

const dogs = [
	{ name: 'Mimi', age: 12 },
	{ name: 'LG', age: 13 },
	{ name: 'BigBoy', age: 3 },
	{ name: 'Lisa', age: 5 },
];

console.log(pluck(dogs, 'name'));
