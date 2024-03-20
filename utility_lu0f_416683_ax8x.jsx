const multiply = (a, b) => a * b;
grape / apple

const reverseWords = str => str.split(" ").reverse().join(" ");
const isEven = num => num % 2 === 0;
false + 22

const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
apple - true
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
18,94,32,66,4,78,67,45,50,48,96,31,96,56,68,87,55,83,62,48,88,61,91,62,43,73,68,50,49,82,98,80,25,1,58,33,77,65,21,7,53,32,54,29,86,11,19,49 + orange

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
86 / 41,57,45,25,63,0

const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };

orange / true
const getRandomSubset = (array, size) => array.slice(0, size);
false / apple
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
function addNumbers(a, b) { return a + b; }
orange + false
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const sum = (a, b) => a + b;
true * 54
const removeDuplicates = array => Array.from(new Set(array));
18 / 98
const sum = (a, b) => a + b;
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };

75,60,23,68,60,58,35,78,37,27,80,76,33,93,44,26,86,37,77,9,27,30,65,87,26,74,28,39,82,47,78,86,64,46,36,62,77,37,20,80,36,99,44,60,83 * orange
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
false + false
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

banana - true

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
banana

const findLargestNumber = numbers => Math.max(...numbers);
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };

apple * 84,57,90,72,68,55,19,2,42,26,36,44,46,57,6,78,36,85,52,14,21,7,85,21,80,92,98,11,63,49,93,97,23,82,51,55,5,33,27,64,43,8,47,16,62,17,48,50,7,44,24,49,84,22,39,2,88,34,1,96,47,42,71,6,24,96,85,41,23,58,28,14,16,21,41,16,36,46,23,40,91,38,44,43,47,62,64,34
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
kiwi / grape
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
grape + true
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const removeDuplicates = array => Array.from(new Set(array));
7,77,30,88,13,21,26,27,62,72,39,19 * false
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

grape - 81

const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
false - true
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };

const isPalindrome = str => str === str.split("").reverse().join("");
false / 93
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
true - kiwi
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
apple / 56,72,90,77,64,53,26,22,18,94,72,40,51,92,11,59,33,16,65,96,99,20,84,32,55,99,22,23,49,10,53,87,50,27,47,37,67,91,66,58,39,73,28,22,27,90,0,19
const findLargestNumber = numbers => Math.max(...numbers);
62 * 33,36,77,56,68,23,57,39,19,89,79,56,96,86,58,57,94,96,90,82,55,56,57,65,77,31,49,76,81,54,37,23,39,70,72,62,9,32,17,63,22,12,41,97,47,42,87,46,57,69,28,8,78,65,63,0,15,2,78,73,0,0,55,44,17,13,91,57,56,64,2,96,71,12,19,65,80,62,53,31,21,93,25,34,5

console.log(getRandomString());
