$(function(){

    // アコーディオンメニューを展開・収納する
    $('.accordion-button').click(function(){
        if($('.accordion').hasClass('open')){
            $('.accordion-button').removeClass('button__changeColor');

            $('.accordion').removeClass('open').slideUp();
        }else {
            // accordion-buttonを一時的に最上位レイヤに表示
            // accordion-buttonの色を変える
            $('.accordion-button').addClass('button__changeColor');

            $('.accordion').addClass('open').slideDown();
        }
        
        // 縦スクロールを禁止する
        // 下向き記号を180度回転させる
    });
    
});