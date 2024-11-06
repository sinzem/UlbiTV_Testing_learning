const validateValue = require("./validateValue"); /* (подключаем проверяемую функцию) */

test("Валидация значения", () => { /* (передаем название + callback) */
    expect(validateValue(50)).toBe(true);
}) 

describe("validateValue", () => { /* (обложка для тестов) */
    test("Корректное значение", () => {
        expect(validateValue(50)).toBe(true);
    })
    test("Меньше корректного", () => {
        expect(validateValue(-1)).toBe(false);
    })
    test("Больше корректного", () => {
        expect(validateValue(101)).toBe(false);
    })
    test("Нижняя граница", () => {
        expect(validateValue(0)).toBe(true);
    })
    test("Верхняя граница", () => {
        expect(validateValue(100)).toBe(true);
    })
}) /* (прогонит тесты, в случае ошибки выдаст ошибку с названием) */
/* (npm run test) */