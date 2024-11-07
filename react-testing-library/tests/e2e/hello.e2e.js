const HelloPage = require("../pages/hello.page")


describe("My hello world page", () => {
    it("test", async () => { /* (тест - название и callback - реально открывает страницу в браузере и выполняет действия) */
        await HelloPage.open(); /* (открытие страницы) */
        await HelloPage.toggleTitleWithInput("hello"); /* (передаем текст в инпут(только при hello должен высветиться заголовок)) */
        await expect(HelloPage.helloTitle).toBeExisting(); /* (проверяем наличие заголовка) */
        await HelloPage.toggleBtn.click(); /* (еще раз жмем кнопку) */
        await expect(HelloPage.helloTitle).not.toBeExisting(); /* (проверяем отсутствие заголовка) */
    })

    it("should not toggle", async () => {
        await HelloPage.open(); /* (открытие страницы) */
        await HelloPage.toggleTitleWithInput("blablabla"); /* (передаем текст в инпут(только при hello должен высветиться заголовок)) */
        await expect(HelloPage.helloTitle).not.toBeExisting(); /* (проверяем отсутствие заголовка) */
    })
}) /* (запускаем npm run test:e2e -- --spec hello.e2e.js  - отдельно этот тест) */