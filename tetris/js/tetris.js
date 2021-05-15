/* 利用する定義をまとめたファイル */

// ブロックのスタート地点
let default_position = 207;
// アクティブ状態（動かせるブロック）のクラス名
let active_class;
// ブロックを置くことができる最も低いポジション（data-position）
let max_bottom_default_position;
// 列を削除した回数
let goal_times = 0;

// 棒型
const stick_0_position = [-100, 0, 100];
const stick_90_position = [-1, 0, 1];
const stick_180_position = [-100, 0, 100];
const stick_270_position = [-1, 0, 1];

// L字型
const L_0_position = [-102, -2, -1, 0, 1];
const L_90_position = [-100, 0, 100, 199, 200];
const L_180_position = [-1, 0, 1, 2, 102];
const L_270_position = [-200, -199, -100, 0, 100];

// 親指型
const thumb_0_position = [-100, -1, 0, 99, 100];
const thumb_90_position = [-1, 0, 1, 100, 101];
const thumb_180_position = [-100, -99, 0, 1, 100];
const thumb_270_position = [-101, -100, -1, 0, 1];

// ヘビ型
const snake_0_position = [-101, -1, 0, 100];
const snake_90_position = [-100, -99, -1, 0];
const snake_180_position = [-101, -1, 0, 100];
const snake_270_position = [-100, -99, -1, 0];

// 凸型
const convex_0_position = [0, -99, 1, 101];
const convex_90_position = [-101, -100, -99, 0];
const convex_180_position = [-101, -1, 0, 99];
const convex_270_position = [0, 99, 100, 101];

// ブロックの全タイプ
const block_types = [
    'stick',
    'L',
    'thumb',
    'snake',
    'convex',
];

// ローテーションのindex（0～3）のデフォルト値の設定
let lotation_index = 0;

let stick_position = [
    stick_0_position,
    stick_90_position,
    stick_180_position,
    stick_270_position,
]

let L_position = [
    L_0_position,
    L_90_position,
    L_180_position,
    L_270_position,
]

let thumb_position = [
    thumb_0_position,
    thumb_90_position,
    thumb_180_position,
    thumb_270_position,
]

let snake_position = [
    snake_0_position,
    snake_90_position,
    snake_180_position,
    snake_270_position,
]

let convex_position = [
    convex_0_position,
    convex_90_position,
    convex_180_position,
    convex_270_position,
]

// ブロックのポジション情報を保有する連想配列
let position = {
    stick: stick_position,
    L: L_position,
    thumb: thumb_position,
    snake: snake_position,
    convex: convex_position,
};

// 左右に動かす場合のポジションの調整値
let adjust_position = {
    left: -1,
    right: 1,
}

// ゲームオーバー状態
let is_game_over = false;
