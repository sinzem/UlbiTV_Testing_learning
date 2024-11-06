import counterReducer, { increment, decrement } from "./counterReducer";

describe("getCounterValue", () => {
    test("increment", () => {
        /* (запускаем редьюсер и действие, ожидаем увеличение состояния) */
        expect(counterReducer({value: 0}, increment())).toEqual({value: 1})
    })

    test("decrement", () => {
        expect(counterReducer({value: 0}, decrement())).toEqual({value: -1})
    })

    test("with empty state", () => {
        /* (при пустом значении - во время загрузки начальное состояние будет пустым обьектом и будет определено как 0 - ожидаем 1 или -1) */
        expect(counterReducer(undefined, increment())).toEqual({value: 1})
        expect(counterReducer(undefined, decrement())).toEqual({value: -1})
    })
})