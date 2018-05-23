$('#beerList').on('change', function(event){
function initMap(){
    var options = {
        zoom:12,
        center: {lat: 33.34999, lng: -111.7895737},
    }
    var map = new
    google.maps.Map(document.getElementById('map'), options);
    /*
    var marker = new google.maps.Marker({
        position : {lat: 33.3216766,lng:-111.7263914},
        map:map  
    });
     var infoWindow = new google.maps.InfoWindow({
         content:'<h5>12 West Brewing</h5>'
     });
 
     marker.addListener('click', function(){
         infoWindow.open(map, marker);
     })*/
 
  // 12 West Brewing
 addMarker({
    coords:{lat: 33.3216766,lng:-111.7263914},
    content: '<h4>12 West Brewing</h4>'
 });
 
 addMarker({
    coords:{lat: 33.36298,lng:-111.84325},
    content: '<h4>Arizona Wilderness Brewery</h4>'
 });
 
 addMarker({
    coords:{lat: 33.35621,lng:-111.79155},
    content: '<h4>OHSO Brewery</h4>'
 });
 
 addMarker({
    coords:{lat: 33.30746,lng:-111.76073},
    content: '<h4>Fox Cigar Bar</h4>'
 });
 
 
 
     //Add marker funciton
 
     function addMarker(props){
        var marker = new google.maps.Marker({
            position : props.coords,
            map:map
        });
 
        if(props.content){
            var infoWindow = new google.maps.InfoWindow({
                content:props.content
            });
 
            marker.addListener('click', function(){
                infoWindow.open(map, marker);
            });
        }
     }
 }

}