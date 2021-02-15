$(document).ready(function () {
  $("#main-ico").hover(
    function () {
      $("#main-ico").attr("src", "./ico/icon2.ico");
    },
    function () {
      $("#main-ico").attr("src", "./ico/favicon.ico");
    }
  );
});

$(document).ready(function () {
  setTimeout(function () {
    console.log("❤");
    console.log("Glad you are interested in my homepage :)");
  }, 2000);
});
