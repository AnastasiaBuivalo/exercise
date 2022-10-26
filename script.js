function amountOfPages(summary){
    let summ = 0;
    let i;
    for(i = 1; summ < summary; i++){
        summ += String(i).length;
    }
    return --i;
};

function isPangram(string) {
    let str = string.trim().split(' ').join('').toLowerCase().split('');
    return (new Set(str).size == 26);
};

function deepCount(a){
    let count = 0;
    for(let value of a){
        count++;
        if(Array.isArray(value))
            count += deepCount(value);
    }
    return count;
}


const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter(item => item.rating >= 8);
}

console.log(showGoodFilms(films));

function showListOfFilms(arr) {
    return arr.reduce((sum, item) => `${typeof(sum) === 'object' ? sum.name:sum}, ${item.name}`)
}

console.log(showListOfFilms(films));




function setFilmsIds(arr) {
    return arr.map((item, count) => {
        item.id = count++
        return item;
    });
}

console.log(setFilmsIds(films));

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    return arr.every(item => item.id != 'undefined')
}

console.log(checkFilms(films));



const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    return data.filter(item => item.amount > 0).reduce((sum, curr) => sum + curr.amount, 0)
};

console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
    return data.reduce((sum, curr) => sum + curr.amount, 0)
};

console.log(getTotalIncomeAmount(funds));


const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);

const discount = normalizePrice(divide100(multiply20(200)));

const compose = (...rest) => (x) => {
    return rest.reduceRight(function(previous, current){
        return current(previous);
    }, x);
};

console.log(discount);
console.log(compose(normalizePrice, divide100, multiply20)(200));

const add1 = function(a){return a + 1}
const addAll3 = function(a,b,c){return a + b + c}

const composeWithArgs = (...rest) => rest.reduceRight((previous, current) => (...restArgs) => current(previous(...restArgs)));

console.log(composeWithArgs(add1,addAll3)(1,2,3));//  => Вернет 7

let c = 4;
function addX(x) {
  return function(n) {
     return n + x
  }
}
 
const addThree = addX(3);
 
let d = addThree(c);
let res = addThree(c);
 
console.log(res)

const combineUrls = (protocol, domain) => {
    return `${protocol}://${domain}`;
}
combineUrls('https', 'mysite.com');
 
let y = 1; 
let x = y = 2; 
console.log(x);

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(1);
        resolve('foo');
    }, 1000);
    setTimeout(() => {
        console.log(2);
        reject('bar');
    }, 900);
});
  
promise.then((value) => {
    console.log(3);
    console.log(value);
}).catch((e) => {console.log(4);console.log(e)})


function getSum(a, b) {
    function sum() {
        console.log(this.a);
        return a + b;
    }
 
    console.log(sum());
}
 
getSum(4, 5);


const arr = [
    {
        name: 'Alex',
        salary: 500
    },
    {
        name: 'Ann',
        salary: 1500
    },
    {
        name: 'John',
        salary: 2500
    },
];
 
const result = arr.map(item => Object.entries(item)[1][1]).reduce((sum, curr) => sum + curr)
console.log(result)


async function makeRequest() {
    return await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(json => console.log(json))
}
 
makeRequest()

function foo(a,b) {
    const [first, second] = a;
    const {eng, ru} = b;
 
    return `${second}, ${ru}`;
}
 
const result2 = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'})
console.log(result2)

a = [1, 2, 3]; b = [1, 2, 3];
console.log(a==b);



const promisify = (item, delay) =>
    new Promise(resolve => setTimeout(() => resolve(item), delay));
 
const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c1 = () => promisify('c', 3000);
 
async function one() {
    const promises = [a(), b(), c1()];
    const [outpu1, outpu2, outpu3] = await Promise.all(promises);
    return `one is done: ${outpu1} ${outpu2} ${outpu3}`;
}
 
async function two() {
    const promises = [a(), b(), c1()];
    const outpu1 = await Promise.race(promises);
    return `two is done: ${outpu1}`;
}
 
async function three() {
    const outpu1 = await a();
    const outpu2 = await b();
    const outpu3 = await c1();
    return `three is done: ${outpu1} ${outpu2} ${outpu3}`
}
 
one().then(console.log);
two().then(console.log);
three().then(console.log);

 
function getSum(a, b) {
    function sum() {
        console.log(this.a);
        return a + b;
    }
 
    console.log(sum());
}
 
getSum(4, 5);