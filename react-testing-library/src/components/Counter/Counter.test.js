import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import { Provider } from "react-redux";
import { createReduxStore } from "../../store/store";
import userEvent from "@testing-library/user-event";



describe("Counter test", () => {
    test("Test router", async () => {
        render( /* (по словам автора рендер создает блок и из него сразу можно деструктурировать например const {getByTestId} = render(...) и далее использовать getByTestId без screen, но у меня выдает ошибку) */
            <Provider store={createReduxStore()}>
                <Counter /> {/* (тестируем только блок Counter, но так как он использует state, оборачиваем в провайдер) */}
            </Provider>
        )

        const incrementBtn = screen.getByTestId("increment-btn"); /* (получаем кнопку) */
        expect(screen.getByTestId("value-title")).toHaveTextContent("0"); /* (получаем счетчик) */
        userEvent.click(incrementBtn); /* (кликаем кнопку) */
        expect(screen.getByTestId("value-title")).toHaveTextContent("1"); /* (ожидаем увеличение счетчика) */
    })
})