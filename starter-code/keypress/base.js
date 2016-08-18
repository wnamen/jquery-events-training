console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  var begin;
  var end;
  var total;

  $(window).on("keypress", function timer(event) {
    console.log(event);

    if ((event.keyCode == 32) && (begin)) {
      end = Date.now();
      total = (end - begin) / 1000;
      $('#total-time').text(total + " seconds");

      begin = 0;
      end = 0;

    } else if (event.keyCode == 32) {
      begin = Date.now();
    }

  })

})
