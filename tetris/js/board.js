const max_height = 22; // 縦22マス
const max_width = 12; // 横12マス


$(() => {

    // メインボードを出力する
    for (let height = 1; height <= max_height; height++) {
        $('table#board').append('<tr></tr>');
        for (let width = 1 + 100 * height; width % 100 <= max_width; width++) {
            $('table#board tr').eq(height - 1).append(`<td class="default" data-active="0"data-position="${width}"></td>`);
        }
    }

});
