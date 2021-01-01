// https://www.codewars.com/kata/53907ac3cd51b69f790006c5

const calculateAngle = (a, b, c) =>
    Math.round((Math.acos((a ** 2 + b ** 2 - c ** 2) / (2 * a * b)) * 180) / 3.14);

const triangleType = (a, b, c) => {
    console.log(a, b, c);
    const triangle = [calculateAngle(a, c, b), calculateAngle(a, b, c), calculateAngle(b, c, a)];
    for (let angle of triangle) {
        if (!angle) return 0;
    }

    if (triangle.filter((angle) => angle < 90).length === 3) return 1;
    if (triangle.filter((angle) => angle === 90).length === 1) return 2;
    return 3;
};
