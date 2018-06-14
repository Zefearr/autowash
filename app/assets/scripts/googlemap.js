function initMap() {
    var carwash = {lat: 59.429360, lng: 24.722962}; 
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: carwash
      
    });
    var marker = new google.maps.Marker({
      position: carwash,
      map: map,
      
    });
  }
 