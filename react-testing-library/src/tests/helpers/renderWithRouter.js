import { MemoryRouter } from "react-router-dom"
import AppRouter from "../../router/AppRouter"
import { render } from "@testing-library/react"

/* (функция-обложка, чтобы не прописывать каждый раз MemoryRouter, подключаем в тесты) */
export const renderWithRouter = (component, initialRoute = "/") => {
    return render (
        <MemoryRouter initialEntries={[initialRoute]}>
            <AppRouter />
            {component}
        </MemoryRouter>
    )
}