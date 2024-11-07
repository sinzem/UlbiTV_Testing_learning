// import {render, fireEvent, screen} from '@testing-library/react';
// import userEvent from "@testing-library/user-event";
// import App from './App';

describe("TEST APP", () => {
//   test('renders learn react link', () => {
//     render(<App />); 
//     // const linkElement = screen.getByText(/learn react/i);
//     // expect(linkElement).toBeInTheDocument();
//     const helloWorldElement = screen.getByText(/hello world/i); /* (получаем элемент(getByText - по тексту в элементе, есть много методов), передаем с игнорированием регистра) */
//     const btn = screen.getByRole("button");
//     const input = screen.getByPlaceholderText(/input value/i);
//     expect(helloWorldElement).toBeInTheDocument(); /* (метод toBeInTheDocument проверит наличие элемента в документе(методов много разных)) */
//     expect(btn).toBeInTheDocument();
//     expect(input).toBeInTheDocument();
  
//     // expect(input).toMatchSnapshot(); /* (в папке _snapsshot_ сохранит копию элемента, если элемент будет изменен - выдаст ошибку и запрос на подтверждение изменения) */
  
//     // screen.debug(); /* (выведет html-структуру в терминал, удобно для поиска ошибок, в д.с сам метод подсвечивается как ошибка, но отрабатывает) */
//   });

//   test('renders learn react', async () => {
//     render(<App />); 
//     /* (Методы получения элементов начинаются с 
//             findBy..., findAll... - используются для работы с асинхронными переменными) 
//             getBy..., getAll... - ориентируются на точное получение элемента - если элемент отсутствует, выдают ошибку и валят тест
//             queryBy..., queryAll... - выдадут null в случае отсутствия элемента, удобно использовать для проверки на наличие */

//       // const helloWorldElem = screen.queryByText(/hello2/i);
//       // expect(helloWorldElem).toBeNull() /* (проверяем, что выдаст null - в д.с true) */

//       /* (пример тестирования асинхронного элемента - появится с таймаутом) */
//       // screen.debug(); /* (выдаст в терминал верстку до появления элемента) */
//       const helloWorldElem = await screen.findByText(/data/i); /* (для работы с асинхронными элементами используем методы с find, сам тест обозначаем как асинхронный) */
//       expect(helloWorldElem).toBeInTheDocument(); /* (проверка наличия элемента на странице) */
//       expect(helloWorldElem).toHaveStyle({color: "red"}); /* (проверка наличия стиля у элемента) */
//       // screen.debug(); /* (выдаст в терминал верстку после появления элемента) */
  
//   });

//   test("CLICK EVENT", () => { /* (тест события клика на кнопку) */
//     render(<App />);
//     const btn = screen.getByTestId("toggle-btn");  /* (получаем кнопку по дата-аттрибуту) */
//     // const toggleDiv = screen.queryByTestId("toggle-elem"); /* (элемент появляется и исчезает при клике на кнопку - как переменную получить его не получится) */
//     expect(screen.queryByTestId("toggle-elem")).toBeNull(); /* (проверяем на отсутствие элемента) */
//     fireEvent.click(btn); /* (симуляция клика) */
//     expect(screen.getByTestId("toggle-elem")).toBeInTheDocument(); /* (проверка элемента на присутствие) */
//     fireEvent.click(btn);
//     expect(screen.queryByTestId("toggle-elem")).toBeNull(); /* (проверяем на отсутствие элемента) */
//   })

//   test("INPUT EVENT", () => { 
//     render(<App />);
//     const input = screen.getByPlaceholderText(/input value/i);  /* (получаем инпут по дата-аттрибуту) */
//     expect(screen.queryByTestId("value-elem")).toContainHTML(""); /* (проверяем блок, в котором должно выводиться значение из инпута(получаем по дата-аттрибуту), он изначально должен вмещать пустую строку) */
//     // fireEvent.input(input, {
//     //   target: {value: "123124"}
//     // }); /* (симуляция инпута - передаем элемент и вводимое значение) */
//     userEvent.type(input, "123124"); /* (еще один симулятор событий, конкретнее - действий пользователя, передаем элемент и данные) */
//     expect(screen.queryByTestId("value-elem")).toContainHTML("123124"); /* (проверяем, соответствует ли значение из инпута в блоке) */
//   })
})
 
// /* (npm run test) */
// /* (тест запущен в следящем режиме, отрабатывает даже без запуска самого приложения) */

