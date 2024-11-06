const square = (number) => {
//    return number * number; /* (простой пример) */

    if (number === 1) { 
        return 1;
    }
    return Math.pow(number, 2) /* (пример с методом) */
}

module.exports = square;