//Cargando la API de Google Maps
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.802755331514746, lng: -58.27877862782144 },
    zoom: 8
  });
}




//Validación del formulario de contacto
var form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  var name = form.elements.name.value;
  var email = form.elements.email.value;
  var message = form.elements.message.value;
  if (!name || !email || !message) {
    alert('Por favor completa todos los campos antes de enviar el formulario.');
  } else {
    form.submit();
  }
});
