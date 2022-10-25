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