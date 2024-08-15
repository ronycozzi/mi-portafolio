// Validación de formularios
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        const nombre = document.getElementById("nombre");
        const email = document.getElementById("email");
        const mensaje = document.getElementById("mensaje");

        if (nombre.value.trim() === "" || email.value.trim() === "" || mensaje.value.trim() === "") {
            alert("Por favor, completa todos los campos.");
            event.preventDefault(); // Evita el envío del formulario
        } else {
            alert("¡Formulario enviado exitosamente!");
        }
    });
});

// Cambio de tema
document.addEventListener("DOMContentLoaded", function() {
    const toggleThemeBtn = document.createElement("button");
    toggleThemeBtn.textContent = "Cambiar Tema";
    toggleThemeBtn.style.position = "fixed";
    toggleThemeBtn.style.top = "20px";
    toggleThemeBtn.style.right = "20px";
    toggleThemeBtn.style.padding = "10px";
    toggleThemeBtn.style.cursor = "pointer";

    document.body.appendChild(toggleThemeBtn);

    toggleThemeBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-theme");
    });
});
