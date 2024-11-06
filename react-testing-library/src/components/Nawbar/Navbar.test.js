import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../tests/helpers/renderWithRouter"
import Navbar from "./Navbar"
import userEvent from "@testing-library/user-event";


describe("USERS TEST", () => {
    /* (тест сразу на все ссылки - лучше тестировать каждую отдельно, иначе в случае ошибки будет непонятно, какая иименно не работает) */
    // test("renders learn react link", async () => {
    //     renderWithRouter(<Navbar />);
    //     const mainLink = screen.getByTestId("main-link"); /* (получаем ссылки) */
    //     const aboutLink = screen.getByTestId("about-link");
    //     const usersLink = screen.getByTestId("users-link");
    //     userEvent.click(aboutLink); /* (иммитируем клик) */
    //     expect(screen.getByTestId("about-page")).toBeInTheDocument(); /* (ожидаем переход на страницу) */
    //     userEvent.click(mainLink);
    //     expect(screen.getByTestId("main-page")).toBeInTheDocument();
    //     userEvent.click(usersLink);
    //     expect(screen.getByTestId("users-page")).toBeInTheDocument();
    // })
    test("renders user link", async () => {
        renderWithRouter(<Navbar />);
        const usersLink = screen.getByTestId("users-link");
        userEvent.click(usersLink);
        expect(screen.getByTestId("users-page")).toBeInTheDocument();
    })
    test("renders about link", async () => {
        renderWithRouter(<Navbar />);
        const aboutLink = screen.getByTestId("about-link");
        userEvent.click(aboutLink); /* (иммитируем клик) */
        expect(screen.getByTestId("about-page")).toBeInTheDocument();
    })
    test("renders main link", async () => {
        renderWithRouter(<Navbar />);
        const mainLink = screen.getByTestId("main-link"); 
        userEvent.click(mainLink);
        expect(screen.getByTestId("main-page")).toBeInTheDocument();
    })
})