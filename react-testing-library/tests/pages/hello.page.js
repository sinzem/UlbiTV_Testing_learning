const { $ } = require('@wdio/globals')
const Page = require('./page');


class HelloPage extends Page {
 
    get toggleBtn () {
        return $('#toggle'); /* (получаем элементы страницы, обозначаем как в css - # для получения id например) */
    }

    get searchInput () {
        return $('#search');
    }

    get helloTitle () {
        return $('#hello');
    }


    async toggleTitleWithInput (text) {  /* (функции делаем асинхронными, передаем текст для тестирования инпута) */
        await this.searchInput.setValue(text); /* (вызываем метод setValue для помещения текста в инпут) */
        await this.toggleBtn.click(); /* (кликаем кнопку) */
    }

    open () {
        return super.open('/hello'); /* (адрес тестируемой страницы) */
    }
}

module.exports = new HelloPage(); /* (описываем и проводим тест в папке e2e в hello.e2e.js) */