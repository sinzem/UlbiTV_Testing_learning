const mapArrToStrings = (arr) => {
    return arr.filter(item => Number.isInteger(item)) /* (отфильтруем только числа) */
                .map(String) /* (превращаем в строку) */
}

module.exports = mapArrToStrings; /* (экспортируем, проверяем в тестах) */