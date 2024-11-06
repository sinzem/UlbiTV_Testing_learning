// import { useEffect, useState } from "react";
// import Users from "./users/Users";

// function App() {

//   let [data, setData] = useState(null); /* (состояние для тестирования асинхронного элемента) */

//   let [toggle, setToggle] = useState(false); /* (для тестирования нажатия кнопки) */

//   let [value, setValue] = useState(""); /* (для тестирования инпута) */

//   const onClick = () => setToggle(toggle = !toggle); /* (для тестирования нажатия кнопки) */

//   useEffect(() => {
//     setTimeout(() => {
//       setData({}) /* (при загрузке после таймаута появится элемент - для примера тестирования асинхронно появляющихся элементов) */
//     }, 100)
//   }, [])

//   return (
//     <div>
//       {/* (data-testid(не camelCase) передаются для того, чтобы тест получал элемент верстки, можно получать и через другие значения) */}
//       <h1 data-testid="value-elem">{value}</h1> {/* (элемент для проверки инпута - выведет значение из инпута) */}
//       {toggle === true && <div data-testid="toggle-elem">toggle</div>} {/* (элемент будет появляться при нажатии на кнопку) */}
//       {data && <div style={{color: "red"}}>data</div>} {/* (элемент появляется асинхронно) */}
//       <h1>Hello world</h1>
//       <button data-testid="toggle-btn" onClick={onClick}>Click me</button>
//       <input type="text" 
//              placeholder="input value..."
//              onChange={e => setValue(e.target.value)}/>
//       <Users />
//     </div>
//   );
// }

// export default App;

// -----------------------------------------
/* (Пример для тестирования более сложной структуры приложения с react-router-dom) */
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import Users from "./users/Users";
import UserDetailsPage from "./pages/UserDetailsPage";
import AppRouter from "./router/AppRouter";
import Navbar from "./components/Nawbar/Navbar";

const App = () => {
  return (
    <div>
      {/* (BrowserRouter выносим в index.js) */}
      {/* <BrowserRouter> */}
      {/* (Все Link выносим в nawbar) */}
      <Navbar/>
      {/* <Link to="/" data-testid="main-link">main</Link>
      <Link to="/about" data-testid="about-link">about</Link>
      <Link to="/users" data-testid="users-link">users</Link> */}
  
      <AppRouter />
      {/* (пути выносим в роутер) */}
      {/* <Routes>  
        <Route path="/" element={<MainPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/users/:id" element={<UserDetailsPage/>}/>
        <Route path="/*" element={<ErrorPage/>}/>
      </Routes> */}
    {/* </BrowserRouter> */}
    </div>
  )
}

export default App;