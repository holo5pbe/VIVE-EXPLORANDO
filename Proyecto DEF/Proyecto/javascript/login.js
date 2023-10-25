document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtener los valores de nombre de usuario y contraseña
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verificar las credenciales (esto es solo un ejemplo)
    if (username === "usuario" && password === "contraseña") {
        alert("Inicio de sesión exitoso");
        // Puedes redirigir al usuario a otra página aquí
    } else {
        document.getElementById("login-error").textContent = "Credenciales incorrectas. Por favor, inténtalo de nuevo.";
    }
});
