var tabletWidth = 1127;
var showHeaderFlag = false;

function isFragTrue() {
    return showHeaderFlag;
}

function changeFragTrue() {
    showHeaderFlag = true;
}

function changeFragFalse() {
    showHeaderFlag = true;
}

// メイン処理
$(function(){
    var $w = $(window),
        timmer;

    $w.scroll( function() {
        clearTimeout(timmer);
        timer = setTimeout( function() {
            var headerHigher = $('.header-higher'); 
            var headerLower = $('.header-lower');

            var showPoint = $('#showPoint').offset().top;
            var hidePoint = $('#hidePoint').offset().top;

            // 確認用にshowPointとhidePointをコンソールで表示
            console.log('showPoint : '+ showPoint + 'px, ');
            console.log('hidePoint : '+ hidePoint + 'px, ');

            if(isFragTrue()){
                if($w.scrollTop() > showPoint && $w.scrollTop() < hidePoint){
                    headerHigher.fadeIn();
                    headerLower.fadeIn();
                } else {
                    headerHigher.fadeOut();
                    headerLower.fadeOut();
                }
            }

        },100);

    }).on('load resize', function(evt) {
        var windowWidth = $w.width();

        if(windowWidth > tabletWidth) {
            changeFragFalse();
        } else {
            changeFragTrue();
            $w.trigger('scroll');
        }

    });
});


// y方向のルール
// showPoint未満、hidePointより大きいとき
// PCHeader:表示
// responsiveHeader:非表示

// showPoint以上、hidePoint以下のとき
// PCHeader:表示
// responsiveHeader:表示

// x方向のルール
// 1128px以上
// PCHeader:表示
// responsiveHeader:非表示

// 1127以下
// PCHeader：非表示
// responsiveHeader：y方向の位置によって表示が変わる

// scrollイベントをtimerメソッドのclearTimeoutで初期化
// setTimeoutを使用して、0.1秒後に起動させる。
// 1pxごとにスクロールイベントが発生するので、
// イベントキューがたまらないようにしている。
// setTimeout(処理, 指定時間[ms]);
// clearTimeout([setTimeout()メソッド]);

// scrollイベントはwidth<1128のときにのみ発生させる必要がある。
// そこで、triggerメソッドを使用して、scrollイベントのオンオフをwidthに応じて制御する
