import { getCounterValue } from "./getCounterValue"


describe("getCounterValue", () => {
    test("work with empty state", () => {
        expect(getCounterValue({})).toBe(0) /* (ожидаем, что получение состояния при загрузке(изначально пустой обьект) вернет 0) */
    })

    test("work with filled state", () => {
        expect(getCounterValue({
            counter: {
                value: 100
            }
        })).toBe(100)
    })
})