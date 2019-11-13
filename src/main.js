import './styles.css';

function attachContactListeners() {
  $("div.col-md-6").on("click", "img#square1", function() {
    $("#square1Img").show();
    $("#square1").hide();
  });
}

$(document).ready(function() {
  // $("img").toggle();
  attachContactListeners();
})
