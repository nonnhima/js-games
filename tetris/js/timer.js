function drawTime() {
    /**
     * 時間を表示する
     **/
    let strTime = '';
    let strSec100, strSec, strMin, strHour;

    // 数値を文字に変換及び2桁表示設定
    strSec100 = `${sec100}`;
    if (strSec100.length < 2) {
        strSec100 = `0${strSec100}`;
    }
    strSec = `${sec}`;
    if (strSec.length < 2) {
        strSec = `0${strSec}`;
    }
    strMin = `${min}`;
    if (strMin.length < 2) {
        strMin = `0${strMin}`;
    }
    // 表示形式を設定
    strTime = `${strMin}:${strSec}:${strSec100}`;
    $('.timer').text(strTime);
}
