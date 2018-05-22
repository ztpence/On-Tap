$('#cityList').on('change', function(event){
    var cityVal = ($('#cityList').val());
    $('#jumbotron').hide();
    // console.log(cityVal);
    // console.log("/api/breweries/" + cityVal);
  
    $.get("/api/breweries/" + cityVal, function(data) {
      //console.log("city data: " + data);
      $('#cityTable').empty();
      
      if (!data) {
          $('#cityTable').append("<h2> Opps, let's try that again</h2>");
         
      }
      else {               
          for (var i = 0; i < data.length; i++) {
  
              var row = $("<tr>");
              row.addClass("city");
        
              row.append("<td>" + data[i] + "</td>");
              console.log("19: " + data[i]);
                           
              $("#cityTable").append(row);
        
            }
        
          }
      
    })
  });

