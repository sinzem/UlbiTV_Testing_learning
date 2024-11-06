const delay = require("./delay");

/* (тестируем асинхронную функцию) */
describe("delay", () => {
    test("Корректное значение", async () => {
        const sum = await delay(() => 5 + 5, 1000); /* (пример работы) */
        expect(sum).toBe(10); /* (ожидаемое значение) */
    })
})