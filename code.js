function showMessage() {
  alert('Sorry, this shortcut is not available yet!');
}




$(document).ready(function () {

  $("#filters button").click(function () {

    let filter = $(this).data("filter");

    // Always hide first
    $(".cs-item").hide();

    // If all, show everything
    if (filter === ".all") {
      $(".cs-item").fadeIn();
    } 
    // Otherwise show only filtered items
    else {
      $(".cs-item" + filter).fadeIn();
    }

  });

});

