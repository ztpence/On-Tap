// var connection = require('../../config/connection.js');
// var app = express();

//get beer type from dropdown bar on beerlist


$('#beerList').on('change', function(event){
    var beerVal = ($('#beerList').val());
     console.log(beerVal);
    // console.log("/api/beers/" + beerVal);
  
    $.get("/api/beers/" + beerVal, function(data) {
          
            $('#beerTable').empty();
            if (!data) {
                $('#beerTable').append("<h2> Opps, let's try that again</h2>");
               
            }
            else {               
                for (var i = 0; i < data.length; i++) {
        
                    var row = $("<tr>");
                    row.addClass("beer");
              
                    row.append("<td>" + data[i].beer_name + "</td>");
                    row.append("<td>" + data[i].brewery_name + "</td>");
                                 
                    $("#beerTable").append(row);
              
                  }
              
                }
                
            });
        });
        

        