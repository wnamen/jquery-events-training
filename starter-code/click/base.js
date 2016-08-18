console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $('span').on("click", function handleClick(event) {
    var time = Date.now();
    var message = "You Clicked: " + $(this).text() + " at " + time;
    $('ul').append("<li>" + message + "</li>");
  })
})
