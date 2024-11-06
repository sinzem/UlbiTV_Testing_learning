const mapArrToStrings = require("./mapArrToStrings"); /* (подключаем проверяемую функцию) */

describe("mapArrToStrings", () => { /* (обложка для тестов) */
    test("Корректное значение", () => {
        expect(mapArrToStrings([1, 2, 3])).toEqual(["1", "2", "3"]); /* (для сравнения обьектов используем toEqual(подробно методы на jestjs.io/docs/expect)) */
    })
    test("Разные значения", () => {
        expect(mapArrToStrings([1, null, 2, true, 3, undefined, "ho-ho", 0])).toEqual(["1", "2", "3", "0"]);
    })
    test("Пустой массив", () => {
        expect(mapArrToStrings([])).toEqual([]);
    })
    test("Отрицание", () => {
        expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3, 4]); /* (пример "не равно") */
    })
}) /* (прогонит тесты, в случае ошибки выдаст ошибку с названием) */
/* (npm run test) */