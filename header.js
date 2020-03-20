function switchByWidth(){
    if (window.matchMedia('(max-width: 1127px)').matches) {
        /* ----------tablet size code here. --------------*/
        $(function(){
            var headerHigher = $('.header-higher'); 
            var headerLower = $('.header-lower');
            /* headerHigher.hide();
            headerLower.hide(); */
        
            //表示位置を取得し変数に格納
            var showPoint = $('#showPoint').offset();
        
            //hide位置を取得し変数に格納
            var hidePoint = $('#hidePoint').offset();
        
            console.log('showPoint : '+ showPoint.top + 'px, ' + showPoint.left + 'px');
            console.log('hidePoint : '+ hidePoint.top + 'px, ' + hidePoint.left + 'px');
        
            $(window).scroll(function(){
                //スクロールが表示位置の値より大きい場合ヘッダー表示
                //スクロールがhide位置より大きい場合ヘッダーhide
                if($(this).scrollTop() > showPoint.top && $(this).scrollTop() < hidePoint.top){
                    headerHigher.fadeIn();
                    headerLower.fadeIn();
                } else {
                    headerHigher.fadeOut();
                    headerLower.fadeOut();
                }
            });
        
        });
    } else if (window.matchMedia('(min-width: 1128px)').matches){
        /* -------------- PC size code here. ----------------- */
        $(function(){
            var headerHigher = $('.header-higher'); 
            var headerLower = $('.header-lower');

            headerHigher.hide();
            headerLower.hide();
        });
    }
}

//ロードとリサイズの両方で同じ処理を付与する
/* window.onload = switchByWidth(); */
$(window).resize(switchByWidth);