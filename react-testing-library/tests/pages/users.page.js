const { $, browser } = require('@wdio/globals')
const Page = require("./page");

/* (для тестирования UserForTest) */
class UsersPage extends Page {
    get loadingTitle() {
        return $(`#users-loading`); /* (получаем заголовок процесса загрузки) */
    }

    get usersList() {
        return $(`#users-list`); /* (получаем список пользователей) */ 
    }

    get usersItems() {
        // return browser.react$$("User"); /* (вариант автора - с browser не работает) */
        return this.usersList.react$$("User"); /* (метод с двумя $$ вернет массив указанных компонентов) */
    }

    async loadData() { /* (асинхронная функция получения данных) */
        try {
            await this.open(); /* (открываем страницу) */
            await this.loadingTitle.waitForDisplayed({timeout: 5000}); /* (индикатор загрузки - прописываем ожидаемое время появления, если за 2с не появится, будет ошибка) */
            await this.usersList.waitForDisplayed({timeout: 5000}); /* (список пользователей, тоже ожидаем, что появится не позже, чем через 2с) */
        } catch (e) {
            throw new Error("Не удалось загрузить пользователей");
        }
    }

    async deleteUser() { /* (функция удаления пользователя) */
        try {
            const usersCount = await this.usersItems.length; /* (получаем длинну массива пользователей) */

            if (!usersCount) {
                throw new Error("Пользователи не найдены")
            }

            await this.usersItems[0].$(`#user-delete`).click(); /* (удаляем любого из массива пользователей) */

            const userCountAfterDelete = await this.usersItems.length; /* (получаем новую длинну массива) */

            if (usersCount - userCountAfterDelete !== 1) {
                throw new Error("Удаление не произошло или удален более чем 1 пользователь");
            }

        } catch (e) {
            throw new Error("Не удалось удалить пользователя. " + e.message)
        }
    }

    open() {
        return super.open("/users-test"); /* (открываем страницу UsersForTest) */
    }
}

module.exports = new UsersPage(); /* (тестируем в users.e2e.js) */