'use strict'

let xhttp = new XMLHttpRequest(); //создает экземпляр обьекта XML

// AJAX GET запрос главной страницы---------------------------------------------------
xhttp.onreadystatechange = function () { //срабатывает при изменении статуса запроса
    if (this.readyState == 4 && this.status == 200) { //проверка на статус 200 запрос прошел успешно
        document.querySelector(".section").innerHTML = this.responseText; //замена полученого HTML в DIV блоке
    }
}
xhttp.open("GET", "main.html", true); //установка параметров запроса
xhttp.send(); //отправка запроса
//------------------------------------------------------------------------------------

//ссылка на main -----------------------------------------------------------
document.querySelector(".navigation__txt").addEventListener("click", (e) => {
    // AJAX GET запрос
    xhttp.onreadystatechange = function () { //срабатывает при изменении статуса запроса
        if (this.readyState == 4 && this.status == 200) { //проверка на статус 200 запрос прошел успешно
            document.querySelector(".section").innerHTML = this.responseText; //замена полученого HTML в DIV блоке
        }
    }
    xhttp.open("GET", "main.html", true); //установка параметров запроса
    xhttp.send(); //отправка запроса
    decorUnderline(e); //подчеркивает нажатую ссылку
});
//---------------------------------------------------------------------------------------

//ссылка на services -----------------------------------------------------------
document.querySelector(".services").addEventListener("click", (e) => {
    // AJAX GET запрос
    xhttp.onreadystatechange = function () { //срабатывает при изменении статуса запроса
        if (this.readyState == 4 && this.status == 200) { //проверка на статус 200 запрос прошел успешно
            document.querySelector(".section").innerHTML = this.responseText; //замена полученого HTML в DIV блоке
        }
    }
    xhttp.open("GET", "services.html", true); //установка параметров запроса
    xhttp.send(); //отправка запроса
    decorUnderline(e); //подчеркивает нажатую ссылку

});
//---------------------------------------------------------------------------------------

//ссылка на services -----------------------------------------------------------
document.querySelector(".about").addEventListener("click", (e) => {
    // AJAX GET запрос
    xhttp.onreadystatechange = function () { //срабатывает при изменении статуса запроса
        if (this.readyState == 4 && this.status == 200) { //проверка на статус 200 запрос прошел успешно
            document.querySelector(".section").innerHTML = this.responseText; //замена полученого HTML в DIV блоке
        }
    }
    xhttp.open("GET", "about.html", true); //установка параметров запроса
    xhttp.send(); //отправка запроса
    decorUnderline(e); //подчеркивает нажатую ссылку
});
//---------------------------------------------------------------------------------------

//ссылка на services -----------------------------------------------------------
document.querySelector(".contact").addEventListener("click", (e) => {
    // AJAX GET запрос
    xhttp.onreadystatechange = function () { //срабатывает при изменении статуса запроса
        if (this.readyState == 4 && this.status == 200) { //проверка на статус 200 запрос прошел успешно
            document.querySelector(".section").innerHTML = this.responseText; //замена полученого HTML в DIV блоке
        }
    }
    xhttp.open("GET", "contact.html", true); //установка параметров запроса
    xhttp.send(); //отправка запроса
    decorUnderline(e); //подчеркивает нажатую ссылку
});
//---------------------------------------------------------------------------------------

//подчеркивает нажатую ссылку, убирает подчеркивания со всех остальных
function decorUnderline (e) {
    document.querySelector(".services").style.textDecoration = "none";
    document.querySelector(".about").style.textDecoration = "none";
    document.querySelector(".contact").style.textDecoration = "none";
    document.querySelector(".navigation__txt").style.textDecoration = "none";
    e.target.style.textDecoration = "underline";
};
//--------------------------------------------------------------------------------------
