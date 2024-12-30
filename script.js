// Скрываем/показываем меню на мобильных устройствах
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.createElement("div");
    menuToggle.className = "menu-toggle";
    menuToggle.innerHTML = `
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    `;
    const navbar = document.querySelector(".navbar");
    const navList = document.querySelector(".nav-list");

    // Добавляем кнопку гамбургера в меню
    navbar.insertBefore(menuToggle, navList);

    // Управляем отображением меню
    menuToggle.addEventListener("click", function () {
        navList.classList.toggle("active");
    });
});