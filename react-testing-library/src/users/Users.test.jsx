import { render, screen } from "@testing-library/react";
import axios from "axios";
// "test": "react-scripts test --transformIgnorePatterns \"node_modules/(?!axios)/\"" - заменяем строку запуска тестов в package.json(без нее с axios в тестах возникает ошибка)
import Users from "./Users";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import UserDetailsPage from "../pages/UserDetailsPage";
import AppRouter from "../router/AppRouter";
import { renderWithRouter } from "../tests/helpers/renderWithRouter";


jest.mock("axios"); /* (подключаем axios) */

describe("USERS TEST", () => {
    let response;
    beforeEach(() => {
        response = { /* (ожидаемый ответ от сервера - обьекты сократили, так как нужны только id и имена) */
            data: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                  },
                  {
                    "id": 2,
                    "name": "Ervin Howell",
                  },
                  {
                    "id": 3,
                    "name": "Clementine Bauch",
                  }
            ]
        }
    })

    afterEach(() => {
      jest.clearAllMocks(); /* (очищаем результаты после каждого теста, чтобы не суммировались) */
    })

    test("renders learn react link", async () => {
        await axios.get.mockReturnValue(response); /* (создаем моковый запрос) */
        // render(<Users />); /* (рендерим компонент) */
        renderWithRouter(<Users />) /* (используем функцию-helper - обертка с MemoryRouter) */

        const users = await screen.findAllByTestId("user-item"); /* (получаем элементы(используем метод с find, так как функция асинхронная)) */
        expect(users.length).toBe(3); /* (ожидаем массив из трех значений согласно response) */
        expect(axios.get).toBeCalledTimes(1); /* (предполагаем, axios должен отработать один раз) */
        // screen.debug(); /* (можно посмотреть пример верстки в терминале) */
    })

    test("test redirect to details page", async () => {
      await axios.get.mockReturnValue(response); 
      // render(
      //   <MemoryRouter initialEntries={["/users"]}> {/* (так как роутер находится в другом месте, оборачиваем в MemoryRouter, инициализируем переход на users) */}
      //       {/* <Users /> */} {/* (вместо Users теперь передаем участок тестируемых роутов) */}
      //       <Routes>
      //         <Route path="/users" element={<Users/>}/>
      //         <Route path="/users/:id" element={<UserDetailsPage/>}/>
      //       </Routes>
      //   </MemoryRouter>
      // ); 
      // ----------
      // render(
      //   <MemoryRouter>
      //     <AppRouter /> {/* (вынесли пути в отдельный роутер) */}
      //     <Users />
      //   </MemoryRouter>
      // )
      // ----------
        // renderWithRouter(null, "/users"); /* (используем функцию-helper - обертка с MemoryRouter) */

      renderWithRouter(<Users />)
      const users = await screen.findAllByTestId("user-item"); 
      expect(users.length).toBe(3);
      userEvent.click(users[0]); /* (иммитируем нажатие на ссылку) */
      expect(screen.getByTestId("user-page")).toBeInTheDocument(); /* (ожидаем переход на страницу пользователя) */ 
  })
})