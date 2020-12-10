// https://www.codewars.com/kata/530017aac7c0f49926000084

const pluck = (arr, name) => arr.map((a) => (a[name] ? a[name] : undefined));