console.log("test");

// getElementById を使う
const title1 = document.getElementById("title");
console.log(title1);

// querySelector を使う
const title2 = document.querySelector("#title");
console.log(title2);

// getElementByClassName を使う
const containers = document.getElementsByClassName("container");
console.log(containers);

// querySelector を使う
const container = document.querySelector(".container");
console.log(container);

// querySelectorAll を使う
const containers_qsa = document.querySelectorAll(".container");
console.log(containers_qsa);

// div の生成
const divEl = document.createElement("div");
console.log(divEl);

// 存在しないタグ名を指定
const myEl = document.createElement("my");
console.log(myEl);

// p タグの生成
const pEl = document.createElement("p");

// h2 タグの生成
const h2El = document.createElement("h2");

// div タグ配下に p タグを追加
divEl.appendChild(pEl);
divEl.appendChild(h2El);
console.log(divEl);

divEl.prepend(pEl);
divEl.prepend(h2El);

console.log(divEl);
