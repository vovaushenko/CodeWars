// 4 kyu
// Validate Sudoku with size `NxN`
// https://www.codewars.com/kata/540afbe2dc9f615d5e000425/train/javascript

class Sudoku {
	constructor(data) {
		this.data = data;
	}

	isValid() {
		const dataSet = Array.from(
			{ length: this.data[0].length },
			(_, id) => id + 1
		);
		// validate rows
		if (!this.areRowsValid(dataSet)) return false;
		// validate columns
		if (!this.areColumnsValid(dataSet)) return false;
		// validate cells
		if (!this.areCellsValid(dataSet)) return false;

		return true;
	}

	areRowsValid(properRow) {
		const stringified = properRow.join('');
		const sudoku = [...this.data.map((r) => [...r])];

		for (let row of sudoku) {
			if (row.sort((a, b) => a - b).join('') !== stringified) return false;
		}
		return true;
	}

	areColumnsValid(properColumn) {
		const stringified = properColumn.join('');
		const sudoku = [...this.data.map((r) => [...r])];

		for (let i = 0; i < sudoku.length; i++) {
			const column = sudoku.map((row) => row[i]);
			if (column.sort((a, b) => a - b).join('') !== stringified) return false;
		}
		return true;
	}

	areCellsValid(properCell) {
		const stringified = properCell.join('');
		const length = Math.sqrt(properCell.length);
		const sudoku = [...this.data.map((r) => [...r])];
		let isCorrect = true;

		const helper = (board) => {
			if (!board.length) return;

			const check = board.slice(0, length);

			for (let i = 0; i < length; i += length) {
				const box = check
					.map((row) => row.slice(i, i + length))
					.reduce((acc, r) => acc.concat(...r), [])
					.sort((a, b) => a - b)
					.join('');

				if (box !== stringified) {
					isCorrect = false;
					return;
				}
			}

			helper(board.slice(length));
		};

		helper(sudoku);

		return isCorrect;
	}
}
