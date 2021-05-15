

function drawTimeScore() {
    /*
     * ゲーム終了後、経過時間の成績(A,B,C)を表示する
     */
     let score_text;
    if (min === 0 && sec < 50) {
        score_text = 'S';
    } else if (min === 0 && 50 <= sec) {
        score_text = 'A';
    } else if (min === 1 && sec < 30) {
        score_text = 'B';
    } else {
        score_text = 'C';
    }
    $('.time_score').text(score_text);
    $('.time_score').addClass(score_text);
}
