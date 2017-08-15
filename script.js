$(document).ready(function() {

  $("div").on("mouseenter", function() {
    if (this.id.includes("white") == false) {
      $(this).fadeOut('slow');
    };
  });

  $(".tooth").on("mouseover", function() {
    document.getElementById('america').play();
  });

  $(".eyebrown").on("mouseover", function() {
    document.getElementById('thanks').play();
  });

  $(".sand").on("mouseover", function() {
    document.getElementById('ahhh').play();
  });

  $(".lightergrey").on("mouseover", function() {
    document.getElementById('thanks').play();
  });

  $(".lightblack").on("mouseover", function() {
    document.getElementById('delish').play();
  });

  $(".jaw").on("mouseover", function() {
    document.getElementById('courage').play();
  });

  $(".button1")
  .on("mouseover", function() {
    $(this).animate({
      width: "150px",
      height: "50px",
      fontSize: "18px",
    }, 1500);
  })
  .on("mouseleave", function() {
    $(this).animate({
      "bottom": "+=40px",
    }, "slow");
  })
  .click(function() {
    $(".button2").show();
    $(".button1").hide();
  });

  $(".button2").click(function() {
    $(".button3").show();
    $(".button2").hide();
  });

  $(".button3").click(function() {
    $("img").show();
    $.when($("#slider").animate({
      "bottom": "-=100%",
    }, 5000)).done(function() {
      location.reload();
    });
  });
});
