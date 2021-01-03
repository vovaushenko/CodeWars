// https://www.codewars.com/kata/58663693b359c4a6560001d6

const mazeRunner = (maze, directions) => {
    let row;
    for (let i = 0; i < maze.length; i++) {
        if (maze[i].includes(2)) row = i;
    }
    let position = maze[row].indexOf(2);
    let route = [];
    for (let dir of directions) {
        if (dir === 'N') row--;
        if (dir === 'S') row++;
        if (dir === 'E') position++;
        if (dir === 'W') position--;
        if (row < 0) return 'Dead';
        if (row < 0 || row > maze.length - 1) return 'Dead';
        if (position < 0 || position > maze[0].length - 1) return 'Dead';

        route.push(maze[row][position]);
    }
    if (route.includes(1)) return 'Dead';
    if (route.filter((r) => r === 0).length === route.length) return 'Lost';
    if (route.filter((r) => r === 0).length === route.length - 1 && route.includes(3))
        return 'Finish';
    return 'Lost'    
};

let maze = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 3],
    [1, 0, 1, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 2, 1, 0, 1, 0, 1],
];

console.log(mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E', 'W', 'W']));
