document.getElementById("register-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtener los valores del nuevo nombre de usuario y la nueva contraseña
    var newUsername = document.getElementById("new-username").value;
    var newPassword = document.getElementById("new-password").value;

    // Realizar la lógica de registro aquí (esto es solo un ejemplo)
    // Normalmente, en un entorno de producción, registrarías al usuario en una base de datos
    // y aplicarías medidas de seguridad adicionales como el hash de contraseñas.

    // En este ejemplo, simplemente mostramos un mensaje de éxito.
    document.getElementById("registration-success").textContent = "Registro exitoso. Ahora puedes iniciar sesión con tus nuevas credenciales.";
    
    // Limpia los campos de entrada
    document.getElementById("new-username").value = "";
    document.getElementById("new-password").value = "";
});
