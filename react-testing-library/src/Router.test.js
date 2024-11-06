import App from "./App"
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

/* (тест при работе с Router) */
describe("TEST APP", () => {
    test("Router test", () => {
        // render(<App />); /* (если роутер в App) */
        render(  /* (в д.с обертка Browserouter в index.js, оборачиваем проверяемый компонент в MemoryRouter) */
            <MemoryRouter>
                <App />
            </MemoryRouter>
        )
        const mainLink = screen.getByTestId("main-link"); /* (получаем ссылки) */
        const aboutLink = screen.getByTestId("about-link");
        userEvent.click(aboutLink); /* (имитируем клик) */
        expect(screen.getByTestId("about-page")).toBeInTheDocument(); /* (ождаем страницу) */
        userEvent.click(mainLink);
        expect(screen.getByTestId("main-page")).toBeInTheDocument();
    })

    test("Error pagee test", () => { /* (тест перехода на несуществующую страницу) */
        render(  
            <MemoryRouter initialEntries={["/examplenotfoundpage"]}> {/* (инициируем несуществующий путь(если указать существующий - выдаст ошибку)) */}
                <App />
            </MemoryRouter>
        )
        expect(screen.getByTestId("not-found-page")).toBeInTheDocument(); /* (ожидаем переход на страницу not-found) */
    })
})