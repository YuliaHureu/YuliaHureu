const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
function addNumbers(a, b) { return a + b; }
kiwi

const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };

grape

const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const filterEvenNumbers = numbers => numbers.filter(isEven);
console.log(getRandomString());
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
2 * 34
const isEven = num => num % 2 === 0;
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

16 * grape
const getRandomSubset = (array, size) => array.slice(0, size);
false * orange
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
32,56,11,26,51,4,27,95,41,72,84,40,21,35,29,31,76,63,29,58,29,32,30,67,78,79,40,32,73,68,32,79,59,81,61,38,29,11,21,0 + 16

const greet = name => `Hello, ${name}!`;
const findLargestNumber = numbers => Math.max(...numbers);

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
true * 29

function addNumbers(a, b) { return a + b; }
true - false
const squareRoot = num => Math.sqrt(num);
const getRandomSubset = (array, size) => array.slice(0, size);
84,27,83,7,28,14,68,21,40,5,57,17,85,93,45,32,85,33,2,81,96,64,50,47,9,79,95,29,77,22,67,74,45,48,84,85,19,86,10,88,74,93,21,23,92,84,44,51,12,53,79,59,54,14,38,99,2,86,59,27,24,48,79,57,63,16,43,94,83,83,1,14,66,55,75,71,74,24,34,20,89,37,82,55,99,11,82,76,13,17,76,53,61,44,4,63,58,23,51 + false

const getUniqueCharacters = str => Array.from(new Set(str)).join("");
87 * true

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;

false - apple
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
kiwi

const getUniqueValues = array => [...new Set(array)];
const findSmallestNumber = numbers => Math.min(...numbers);

class MyClass { constructor() { this.property = getRandomString(); } }
