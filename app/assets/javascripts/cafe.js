window.addEventListener("load", function() {
  $("li").on("click", function() {
    $("li.selected").removeClass("selected");
    $(this).addClass("selected");
    $(".contents div").hide(); // 二つの要素を非表示にする
    $("." + this.id).show(); // クリックされたボタンに対応する要素を表示する
  });
});

$(function() {
$('.menu-box2').slick({
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>'
  });
});
