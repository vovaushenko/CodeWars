// 2129. Capitalize the Title
const words = (sentence: string) => sentence.split(' ');
const isLongEnough = (word: string): boolean => word.length > 2;
const capitalize = (word: string): string =>
	word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
const lowercase = (word: string): string => word.toLowerCase();

const capitalizeTitle = (title: string): string =>
	words(title)
		.map((word) => (isLongEnough(word) ? capitalize(word) : lowercase(word)))
		.join(' ');
