$(".switcher").click(function() {
  console.log("sd");
  $(".switcher__thumb").toggleClass("switcher__thumb_on");
  $(this).toggleClass("switcher_on");
  $(".html-preview").slideToggle("fast");
});
