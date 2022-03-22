// button タグの生成
const buttonEl = document.createElement("button");
// ボタンのラベル設定
buttonEl.textContent = "ボタン";

// エリア 1 の div タグを取得
const divEl = document.querySelector(".container");

// div タグ配下に button タグを追加
divEl.appendChild(buttonEl);
