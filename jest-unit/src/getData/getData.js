const axios = require("axios"); 
const mapArrToStrings = require("../mapArrToStrings/mapArrToStrings"); /* (для небольшого усложнения тестируемой функции подключаем эту) */

const getData = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users"); /* (получаем массив пользователей) */
        const userIds = response.data.map(user => user.id); /* (взяли их id) */
        return mapArrToStrings(userIds); /* (превратили в строку) */
    } catch (e) {
        console.log(e);
    }
}

module.exports = getData;
