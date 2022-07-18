const btn = document.getElementById('button');

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email');
  const name = document.getElementById('name');
  const message = document.getElementById('message');

  if (email.value == "" || name.value == "" || message.value == "") {
    Swal.fire({
      icon: 'warning',
      title: "Attenzione! È necessario compilare tutte le parti del form",
      showConfirmButton: true,
      confirmButtonColor: "#22b14c"
    });
  } else {
    btn.value = 'Invio in corso...';

    const serviceID = 'service_5az7j62';
    const templateID = 'template_yc7g4k8';

    emailjs.sendForm(serviceID, templateID, this).then(() => {
      btn.value = 'Invia';
      email.value = "";
      name.value = "";
      message.value = "";
      Toast.fire({
        icon: 'success',
        title: 'Messaggio inviato con successo!'
      })
    }, (err) => {
      btn.value = 'Invia';
      Swal.fire({
        icon: 'error',
        title: 'Errore! Messaggio non inviato',
        showConfirmButton: false,
        timer: 3000
      });
      console.log(JSON.stringify(err));
    });
  }
});
