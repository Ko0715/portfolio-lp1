$('.header-hamburger').on('click',function(){//.btn_triggerをクリックすると
    $('.header-hamburger__item').toggleClass('close');//.header-hamburger__itemにcloseクラスを付与(ボタンのアニメーション)
    $('.header-nav').toggleClass('close');//.header-navが0.5秒でフェードイン(メニューのフェードイン)
    $('body').toggleClass('noscroll');//bodyにnoscrollクラスを付与(スクロールを固定)
});

  if( $(window).width() < 768 ){//デバイスの幅が768以下のとき
    $('.header-nav__item>a').on('click',function(){//.header-nav__item>aをクリックすると
      $('.header-nav').fadeOut(500);//.header-navが0.5秒でフェードアウト(メニューのフェードアウト)
      $('.header-hamburger__item').removeClass('close');//.header-hamburger__itemのcloseクラスを削除
      $('body').removeClass('noscroll');//bodyのnoscrollクラスを削除
  });
}