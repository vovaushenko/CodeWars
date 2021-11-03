type ReturnHookType<T> = [() => T, (newVal: T) => void];

export const useState = <T>(initial: T): ReturnHookType<T> => {
	let state = initial;
	const getter = () => state;
	const setter = (newVal: T) => {
		state = newVal;
	};
	return [getter, setter];
};

const [counter, setCounter] = useState(0);

console.log(counter());
setCounter(1);
console.log(counter());
setCounter(155);
