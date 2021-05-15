function selectPlayerPopup() {
    /**
     * 開始時のポップアップ
     **/
    var popup = $('#new_game');
    popup.addClass('is-show');
    closePopUp($('[data-js~=start_btn]'), popup);
}

function showConglatsPopup() {
    /**
     * 祝福ウィンドウを表示する
     **/
    var popup = $('#won_popup');
    popup.addClass('is-show');
    closePopUp($('.js-black-bg'), popup);
    closePopUp($('.js-close-btn'), popup);
}

function closePopUp(elem, popup) {
    /**
     * 閉じるボタンをクリックしたときの挙動
     **/
    if (!elem) return;
    elem.on('click', function() {
        popup.removeClass('is-show');
    })
}
