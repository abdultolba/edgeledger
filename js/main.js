// Initialize and add the map
function initMap() {
    // Initial map location
    const loc = { lat: 42.361145, lng: -71.057083 };
    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 14,
        center: loc
    });

    // The marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map: map });
}

// Navbar opacity 
window.addEventListener('scroll', function(){
    if(window.scrollY > 150){
        // Make it slightly transparent
        document.getElementById('navbar').style.opacity = 0.9;
    } else {
        // Not transparent at all
        document.getElementById('navbar').style.opacity = 1;
    }
});

// Smooth Scrolling
$('#navbar a, .btn').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});
