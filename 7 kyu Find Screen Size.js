// https://www.codewars.com/kata/5bbd279c8f8bbd5ee500000f

const findScreenHeight = (width, ratio) => {
    ratio = ratio.split(':');
    return `${width}x${width * (ratio[1] / ratio[0])}`;
};