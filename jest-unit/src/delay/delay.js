const delay = (callback, ms) => { /* (пример асинхронной функции для тестирования) */
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(callback());
        }, ms);
    })
}

// delay(() => 5 + 5, 1000).then(res => console.log(res));

module.exports = delay;
