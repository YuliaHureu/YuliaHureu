false + true
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
orange / 92
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
