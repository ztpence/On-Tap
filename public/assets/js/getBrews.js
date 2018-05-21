var connection = require('../../config/connection.js');
// var app = express();



//get beer type from dropdown bar on beerlist
//.dropdown-item

$(function(){
    $("#cityList").on("click", function(event){
        var citySel = $("#cityList :selected").text();

    $.ajax("/cityList/" + citySel, {
        type: "PUT",
        data: citySel
    }).then(
        function(){

            var html = "<h1>" + req.params.city + " Bars and Breweries in the East Valley</h1>";
            //creat HTML table of beers of the desired type
                html += "<ul>";
            
                for (var i = 0; i < result.length; i++) {
                  html += "<li><p>Name: "+ result[i].brewery_name + "</p></li>";
                }  
                html += "</ul>";
            
                res.send(html);
              });
            });
              
    //replaces the text on the button with the selected city
        $(".dropdown-menu li a").click(function(){
            $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
            $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
        });       
    });
