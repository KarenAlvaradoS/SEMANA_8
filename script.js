// Botón alerta
document.getElementById('alertButton').addEventListener('click', () => {
  alert('¡Gracias por visitar NEOS PIZZA 🍕! Prueba nuestras deliciosas pizzas y alitas.');
});

// Validación del formulario con Bootstrap y mensajes personalizados
(() => {
  'use strict';
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', event => {
    event.preventDefault();
    event.stopPropagation();

    // Validar manualmente cada campo
    const nombre = form.nombre;
    const email = form.email;
    const mensaje = form.mensaje;

    let valid = true;

    // Validar nombre
    if (!nombre.value.trim()) {
      nombre.classList.add('is-invalid');
      valid = false;
    } else {
      nombre.classList.remove('is-invalid');
      nombre.classList.add('is-valid');
    }

    // Validar email con regex básica
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
      email.classList.add('is-invalid');
      valid = false;
    } else {
      email.classList.remove('is-invalid');
      email.classList.add('is-valid');
    }

    // Validar mensaje
    if (!mensaje.value.trim()) {
      mensaje.classList.add('is-invalid');
      valid = false;
    } else {
      mensaje.classList.remove('is-invalid');
      mensaje.classList.add('is-valid');
    }

    if (valid) {
      alert('Formulario enviado correctamente, ¡gracias por contactarnos!');
      form.reset();
      // Quitar clases de validación
      [nombre, email, mensaje].forEach(field => {
        field.classList.remove('is-valid');
      });
    }
  });

  // Limpiar validaciones al escribir
  ['nombre', 'email', 'mensaje'].forEach(id => {
    const field = document.getElementById(id);
    field.addEventListener('input', () => {
      field.classList.remove('is-invalid', 'is-valid');
    });
  });
})();
