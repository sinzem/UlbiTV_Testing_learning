import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import { Provider } from "react-redux";
import { createReduxStore } from "../../store/store";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "../../tests/helpers/renderWithRouter";
import { renderTestApp } from "../../tests/helpers/renderTestApp";



describe("Counter test", () => {
    test("Test router", async () => {
        // render( /* (по словам автора рендер создает блок и из него сразу можно деструктурировать например const {getByTestId} = render(...) и далее использовать getByTestId без screen, но у меня выдает ошибку) */
        //     <Provider store={createReduxStore({
        //         counter: {value: 10}
        //     })}>
        //         <Counter /> {/* (тестируем только блок Counter, но так как он использует state, оборачиваем в провайдер) */}
        //     </Provider>
        // )
        // --------------------------
        /* (с renderWithRouter хелпером) */
        // renderWithRouter(<Counter />, {counter: {value: 10}})

        // const incrementBtn = screen.getByTestId("increment-btn"); /* (получаем кнопку) */
        // expect(screen.getByTestId("value-title")).toHaveTextContent("10"); /* (получаем счетчик) */
        // userEvent.click(incrementBtn); /* (кликаем кнопку) */
        // expect(screen.getByTestId("value-title")).toHaveTextContent("11"); /* (ожидаем увеличение счетчика) */
        // ---------------------------
        render(renderTestApp(null, { route: "/" , initialState: {counter: {value: 10}}})) /* (вместо <Counter> передаем null, так как Counter уже есть по пути "/") */
        const incrementBtn = screen.getByTestId("increment-btn");
        expect(screen.getByTestId("value-title")).toHaveTextContent("10"); 
        userEvent.click(incrementBtn); 
        expect(screen.getByTestId("value-title")).toHaveTextContent("11"); 
    })
})