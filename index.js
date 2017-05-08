
  $(document).ready(function() {
    $("#Message").on("click", function(){
     $("#target").fadeToggle(500).fadeToggle(500);
    //  $(".message").html("Here is the message ");
     
    });
  });

var showText = function (target, message, index, interval) {   
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}

$(function () {

  showText("#target1", "-by Paul Newman Mekala", 0, 200);   

});

$('button').click(function(){
  randomQuote();
});
function randomQuote() {
var $target= $("#target");
 var $tweet= $("#tweet"); 
  $.ajax({
    
      url: "http://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        $target.html("<h4 id='o' class='text-center'>" +
          response.quoteText + "</h4><p><br>&dash; " + response.quoteAuthor + "</p> <br>      ");
          $tweet.attr("href", "http://twitter.com/home/?status=" + response.quoteText +
          ' (' + response.quoteAuthor + ')');
        
      }  
  });
}

   function changeLink(){
    document.getElementById("tweet").href = "http://twitter.com/home/?status="+  document.getElementById('my').text +
      ' (' + document.getElementById('para').text + ')';
    }