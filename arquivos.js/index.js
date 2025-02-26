

    document.addEventListener("DOMContentLoaded", function () {
        const dropdown = document.querySelector(".dropdown span");
        const submenu = document.querySelector(".submenu");

        dropdown.addEventListener("click", function (event) {
            event.stopPropagation(); // Evita que o clique feche imediatamente
            submenu.style.display = submenu.style.display === "block" ? "none" : "block";
        });

        // Fecha o menu ao clicar fora dele
        document.addEventListener("click", function (event) {
            if (!dropdown.parentElement.contains(event.target)) {
                submenu.style.display = "none";
            }
        });
    });



    document.addEventListener("DOMContentLoaded", function () {
        const dropdown = document.querySelector(".dropdown span");
        const submenu = document.querySelector(".submenu");

        dropdown.addEventListener("click", function (event) {
            event.stopPropagation(); // Evita que o clique feche imediatamente
            submenu.style.display = submenu.style.display === "block" ? "none" : "block";
        });

        // Fecha o menu ao clicar fora dele
        document.addEventListener("click", function (event) {
            if (!dropdown.parentElement.contains(event.target)) {
                submenu.style.display = "none";
            }
        });
    });


