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