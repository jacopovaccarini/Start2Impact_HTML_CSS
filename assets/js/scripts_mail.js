const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Invio in corso...';

   const serviceID = 'service_5az7j62';
   const templateID = 'template_yc7g4k8';

   emailjs.sendForm(serviceID, templateID, this).then(() => {
      btn.value = 'Invia';
      Swal.fire({ //messaggio per invio con successo
        icon: "success",
        title: "Messaggio inviato con successo!",
        showConfirmButton: false,
        timer: 2000
      });
    }, (err) => {
      btn.value = 'Invia';
      Swal.fire({
  	icon: 'error',
  	title: 'Errore! Messaggio non inviato',
  	showConfirmButton: false,
        timer: 2000
      });
      console.log(JSON.stringify(err));
    });
});