const swap = (arr: any[], id1: number, id2: number) =>
	([arr[id1], arr[id2]] = [arr[id2], arr[id1]]);

function reverseString(s: string[]): void {
	let [i, j] = [0, s.length - 1];
	while (i < j) {
		swap(s, i, j);
		i++;
		j--;
	}
}
