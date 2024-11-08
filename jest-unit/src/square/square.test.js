const square = require("./square"); /* (подключаем проверяемую функцию) */

describe("validateValue", () => { /* (обложка для тестов и вспомогательных функций) */

    let mockValue; /* (можем вводить переменные для тестирования) */

    beforeEach(() => { /* (вспомогательная функция, отработает перед каждым тестом) */
        /* (например добавить в БД) */
    })

    beforeAll(() => { /* (вспомогательная функция, отработает один раз перед всеми тестами) */
       
    })

    test("Корректное значение", () => {
        /* (тесты для простого примера) */
        // expect(square(2)).toBe(4);
        // expect(square(2)).toBeLessThan(5); /* (полученное должно быть меньше указанного) */
        // expect(square(2)).toBeGreaterThan(3); /* (полученное должно быть больше указанного) */
        // expect(square(2)).not.toBeUndefined(); /* (полученное не должно быть undef) */
        // ----------------------------
        /* (тесты для примера с методом) */
        const spyMathPow = jest.spyOn(Math, "pow"); /* (передаем в spyOn обьект и метод) */
        square(2); /* (отрабатывает тестируемая функция) */
        expect(spyMathPow).toBeCalledTimes(1); /* (toBeCalledTimes ожидает предполагаемое количество вызовов метода - если при отработке тестируемой функции метод отработал больше или меньше раз - выдаст ошибку(после тестов в afterEach запускаем функцию обнуления счетчика)) */
    })

    test("Корректное значение", () => {
        const spyMathPow = jest.spyOn(Math, "pow");
        square(1);
        expect(spyMathPow).toBeCalledTimes(0); /* (пример при вызове функции с 1 - метод не должен отработать) */
    })

    afterEach(() => { /* (вспомогательная функция, отработает после каждого теста) */
        /* (например удалит из БД) */
        jest.clearAllMocks(); /* (очищаем данные после каждого теста(в д.с toBeCalledTimes считает вызовы метода внутри тестируемой функции - без очистки будет суммировать вызовы из разных тестов)) */
    })

    afterAll(() => { /* (вспомогательная функция, отработает один раз после всех тестов) */
       
    })
    
}) /* (прогонит тесты, в случае ошибки выдаст ошибку с названием) */
/* (npm run test) */