const UsersPage = require("../pages/users.page");

describe("Users page", () => {
    // it("load data", async () => {
    //     await UsersPage.loadData(); /* (проверка индикатора загрузки) */
    // })

    it("delete user", async () => {
        await UsersPage.loadData(); 
        await UsersPage.deleteUser(); /* (запускаем функцию удаления пользователя) */
    })
}) /* (запускаем npm run test:e2e -- --spec users.e2e.js  - отдельно этот тест) */