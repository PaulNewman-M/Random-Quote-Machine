

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