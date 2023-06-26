console.clear();

$(".icon-box-click").click(function () {
  $(".down-1127-2").addClass("active");
});

$(".x-btn").click(function () {
  $(".down-1127-2").removeClass("active");
});

$(".side-bar-mini-button").click(function () {
  $(".side-bar-mini").addClass("slide");
  $(this).addClass("delete");
  $(".side-bar-mini-button-2").addClass("in");
});

$(".side-bar-mini-button-2").click(function () {
  $(".side-bar-mini").addClass("slidein");
  $(".side-bar-mini").removeClass("slide");
  $(".side-bar-mini-button").removeClass("delete");
  $(this).removeClass("in");
});

var mHtml = $("html");
var page = 1;

mHtml.animate({ scrollTop: 0 }, 10);

$(window).on("wheel", function (e) {
  if (mHtml.is(":animated")) return;
  if (e.originalEvent.deltaY > 0) {
    if (page == 5) return;
    page++;
  } else if (e.originalEvent.deltaY < 0) {
    if (page == 1) return;
    page--;
  }
  var posTop = (page - 1) * $(window).height();
  mHtml.animate({ scrollTop: posTop });
});
//부분 스크롤할때는 전체스크롤이 안되게 할 수는 없을까?때
