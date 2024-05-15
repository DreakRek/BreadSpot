// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();



// slick slider
$('.chocolate_container').slick({
    infinite: true,
    center: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});

/** google_map js **/

let isLoggedIn = false; // Esto normalmente vendría del estado de la aplicación o una API
let username = "Usuario"; // Este sería el nombre del usuario autenticado

document.addEventListener("DOMContentLoaded", function() {
    updateUI();
});

function updateUI() {
    if (isLoggedIn) {
        document.getElementById('auth-buttons').style.display = 'none';
        document.getElementById('user-info').style.display = 'block';
        document.getElementById('username').textContent = `Hola, ${username}`;
    } else {
        document.getElementById('auth-buttons').style.display = 'block';
        document.getElementById('user-info').style.display = 'none';
    }
}

function login() {
    // Aquí iría la lógica para el inicio de sesión
    isLoggedIn = true;
    username = "Juan"; // Esto debería ser dinámico, obtenido del servidor
    alert(`Hola, ${username}! Has iniciado sesión con éxito.`);
    updateUI();
}

function register() {
    // Aquí iría la lógica para el registro
    alert(`Hola! Fuiste registrado te llamas Juan .-. BACKEND A TRABAJAR MIERDA .`);
    console.log('Registro');
}

function logout() {
    // Aquí iría la lógica para cerrar sesión
    isLoggedIn = false;
    alert(`Adios :D.`);
    updateUI();
}

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(-36.820105014109046, -73.04400539444728),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}