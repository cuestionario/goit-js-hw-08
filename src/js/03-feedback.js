import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

//limitar la frecuencia para ejecutar la función a 500 ms
form.addEventListener('input',throttle(() => {
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }, 500)
);
//Verificar si el contenido se ha cargado completamente y si hay datos almacenados
document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const formData = JSON.parse(savedData);
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  console.log('Form data submitted:', formData);

  // Borrar datos del almacenamiento local
  localStorage.removeItem('feedback-form-state');
});
