

//get beer type from dropdown bar on beerlist


$(function(){
    $("#beerList").on("click", function(event){
        var beerType = $("#beerList :selcted").text();
         

//GET beer and brewery names from DB where beer type matches.
$.ajax("/beerList/" + beerType, {
  type: "PUT",
  data: beerType
}).then(
  function(){

var html = "<h1>" + req.params.type + " beers from the East Valley</h1>";
  //creat HTML table of beers of the desired type
      html += "<ul>";
  
      for (var i = 0; i < result.length; i++) {
        html += "<li><p>Name: " + result[i].beer_name + "</p>";
        html += "<p> from: " + result[i].brewery_name + "</p></li>";
      }  
      html += "</ul>";
  
      res.send(html);
      });
    });

    //replaces the text on the button with the desired beer style
    $(".dropdown-menu li a").click(function(){
      $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
      $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
    });

  });


  


