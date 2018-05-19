// var connection = require('../../config/connection.js');
// var app = express();

// //replaces the text on the button with the desired beer style (super cool)
// $(".dropdown-menu li a").click(function(){
//     $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
//     $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
//   });

// //get beer type from dropdown bar on beerlist
// //.dropdown-item

// $(function(){
//     $('.dropdown-toggle').dropdown()
// })

// //GET beer and brewery names from DB where beer type matches.
// app.get("/breweryList:city", function(req, res) {
//     connection.query("SELECT * FROM beerlist where city_name = ? SORT BY brewery_name", [req.params.name], function(err, result) {
//       var html = "<h1>" + req.params.name + " Bars and Breweries in the East Valley</h1>";
//   //creat HTML table of beers of the desired type
//       html += "<ul>";
  
//       for (var i = 0; i < result.length; i++) {
//         html += "<li><p>Name: "+ result[i].brewery_name + "</p></li>";
//       }  
//       html += "</ul>";
  
//       res.send(html);
//     });
//   });
  



// //copy pasta for breweries based on city search

// //GET breweries/bars by city

// //display information

// //POST script for adding new beers to DB