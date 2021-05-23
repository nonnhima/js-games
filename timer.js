// 時刻の変数宣言（スタートした時刻、ストップした時刻、経過時間）
let startTime, nowTime, addTime;
// 時間関係の変数の宣言(ミリ秒、100分の1秒、秒、分)
let millisec, sec100, sec, min;
// タイムゾーンのオフセット値
let gmt;
let timerId;

function startTimer() {
    /**
     * タイマーのリセット
     **/
    addTime = 0;
    millisec = sec100 = sec = min = 0;
    // 戻り値は分のため60で割る
    gmt = new Date().getTimezoneOffset() / 60;
    timerId = setTimeout(runTimer, 10);
    // スタート時刻を設定（タイマーが進んでいれば加算）
    startTime = new Date().getTime();
    addTime = (min * 60 * 1000 + sec * 1000 + millisec);
    startTime -= addTime;
}

function stopTimer() {
    clearTimeout(timerId);
    drawTime();
}

function drawTime() {
    /*
     * 時間を表示する
     */
    let strTime = "";
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
    strTime = `${strMin}:${strSec}.${strSec100}`;
    $('.timer').text(strTime);
}

function runTimer() {
    /**
     * 時間を計測する
     **/
    // スタートからの差分をとる
    nowTime = new Date().getTime();
    const diff = new Date(nowTime - startTime);
    // ミリ秒、100分の1秒、秒、分を設定
    millisec = diff.getMilliseconds();
    sec100 = Math.floor(millisec / 10);
    sec = diff.getSeconds();
    min = diff.getMinutes();

    // 時間を表示する
    drawTime();
    timerId = setTimeout(runTimer, 10);
}

export {startTimer, stopTimer, sec, min};
