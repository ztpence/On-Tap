$('#cityList').on('change', function(event){
    var cityVal = ($('#cityList').val());
    console.log(cityVal);
    console.log("/api/breweries/" + cityVal);
  
    $.get("/api/breweries/" + cityVal, function(data) {
      
    })
  });

