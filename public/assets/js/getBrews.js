




//get beer type from dropdown bar on beerlist


$(function(){
    $("#brewList").on("click", function(event){
      var city = $(this).data("dropdown-item");    

//GET beer and brewery names from DB where beer type matches.
$.ajax("/brewList/" + city, {
  type: "PUT",
  data: city_name
}).then(
  function(){

var html = "<h1>" + req.params.data + " are located in Phoenix's East Valley</h1>";
  //creat HTML table of beers of the desired type
      html += "<ul>";
  
      for (var i = 0; i < result.length; i++) {
        html += "<p> from: " + result[i].brewery_name + "</p></li>";
      }  
      html += "</ul>";
  
      res.send(html);
      });
    });

    //replaces the text on the button with the desired beer style (super cool)
    $(".dropdown-menu li a").click(function(){
      $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
      $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
    });

  });


  
