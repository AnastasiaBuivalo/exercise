function amountOfPages(summary){
    let summ = 0;
    let i;
    for(i = 1; summ < summary; i++){
        summ += String(i).length;
    }
    return --i;
}