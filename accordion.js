$(function(){

    // アコーディオンメニューを展開・収納する
    $('.accordion-button').click(function(){
        if($('.accordion').hasClass('.open')){
            $('.accordion').removeClass('.open').slideUp().fadeOut();
        }else {
            $('.accordion').addClass('.open').slideDown().show();
        }

        // accordion-buttonを一時的に最上位レイヤに表示
        // accordion-buttonの色を変える
    });
    
});