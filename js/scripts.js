$(document).ready(function(){
  $("#transportation_survey2").submit(function(event) {
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function() {
      var workTransportationMode = $(this).val();
      $("#work-responses").append("<p>" + "-" + workTransportationMode + "</p>");
  });
      $("#nonwork-responses").show();
      $("input:checkbox[name=nonwork-transportation]:checked").each(function() {
        var nonworkTransportationMode = $(this).val();
      $("#nonwork-responses").append("<p>" + "-" + nonworkTransportationMode + "</p>");
    });
      $("#transportation_survey").hide();
      $("#transportation_survey2").hide();
  });
});
