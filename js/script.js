ScrollReveal().reveal('.box', {
  duration: 1000,
  viewFactor: 0.3,
  origin: 'bottom',
  distance: '50px',
  reset: false
});
ScrollReveal().reveal('.topic', {
  duration: 1000,
  viewFactor: 0.3,
  origin: 'bottom',
  distance: '50px',
  reset: false
});
ScrollReveal().reveal('.right', {
  duration: 1000,
  viewFactor: 0.3,
  origin: 'right',
  distance: '50px',
  reset: false
});
ScrollReveal().reveal('.box1', {
  duration: 1000,
  viewFactor: 0.3,
  origin: 'bottom',
  distance: '50px',
  reset: false
});
ScrollReveal().reveal('.box2', {
  duration: 1000,
  viewFactor: 0.3,
  origin: 'bottom',
  distance: '50px',
  reset: false
});
ScrollReveal().reveal('.animated', {
  duration: 1200,
  reset: false
});


$(window).on('load', function () {
  $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述

  //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  $("#splash").delay(1500).fadeOut('slow', function () {//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述

    $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与

  });
  //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

  //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
  $('.splashbg').on('animationend', function () {
    //この中に動かしたいJSを記載
  });
  //=====ここまで背景が伸びた後に動かしたいJSをまとめる

});