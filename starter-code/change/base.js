console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

  $("input.add").on("change", function handleChange(event){

    var left = parseInt($('#left').val()) || 0;
    var right = parseInt($('#right').val()) || 0;
    var total = left + right;

    $('#total').val(total);

  })

})
