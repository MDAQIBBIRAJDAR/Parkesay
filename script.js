document.getElementById('getStarted').addEventListener('click', function() {
    alert('Getting started with ParkPlus!');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent! We will get back to you soon.');
});

const parkingSpots = [
    { lat: 40.73061, lng: -73.935242, name: "Parking Spot 1" },
    { lat: 40.74061, lng: -73.945242, name: "Parking Spot 2" },
    { lat: 40.75061, lng: -73.955242, name: "Parking Spot 3" },
    { lat: 40.76061, lng: -73.965242, name: "Parking Spot 4" },
    { lat: 40.77061, lng: -73.975242, name: "Parking Spot 5" },
  ];

  // Initialize the map
  function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: parkingSpots[0],
      zoom: 13,
    });

    // Add markers for parking spots
    parkingSpots.forEach((spot) => {
      new google.maps.Marker({
        position: { lat: spot.lat, lng: spot.lng },
        map: map,
        title: spot.name,
      });
    });
  }

  // Initialize map when the page loads
  window.onload = initMap;