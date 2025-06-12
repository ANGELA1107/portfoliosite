const colors = [
    "#f0f8ff", // 淡い水色
    "#b0c4de", // 少し濃い水色
    "#778899", // 中間水色
    "#4682b4", // 濃いめの水色
];

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollRatio = scrollY / docHeight;

    // グラデーションの色を線形補間（4段階）
    const segment = 1 / (colors.length - 1);
    let index = Math.floor(scrollRatio / segment);
    index = Math.min(index, colors.length - 2); // 最後のインデックスを超えないように

    const startColor = colors[index];
    const endColor = colors[index + 1];

    // 各セグメント内での進捗度 (0〜1)
    const localRatio = (scrollRatio - index * segment) / segment;

    // ヘルパー：#rrggbb をRGBに変換
    function hexToRgb(hex) {
        const bigint = parseInt(hex.slice(1), 16);
        return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
    }

    // ヘルパー：RGBを補間
    function interpolateRGB(color1, color2, ratio) {
        const c1 = hexToRgb(color1);
        const c2 = hexToRgb(color2);
        const result = c1.map((c, i) => Math.round(c + (c2[i] - c) * ratio));
        return `rgb(${result[0]}, ${result[1]}, ${result[2]})`;
    }

    const currentColor = interpolateRGB(startColor, endColor, localRatio);
    document.body.style.background = currentColor;
});

const loadingScreen = document.querySelector(".loader");

// ページの読み込みが完了したら実行される関数
window.addEventListener("load", function () {
    // ローディング画面を非表示にする
    loadingScreen.classList.add("loading");
});
// 1秒後にloadingScreenが表示されていなければ、強制的に非表示にする
setTimeout(function () {
    if (!loadingScreen.classList.contains("loading")) {
        loadingScreen.classList.add("loading");
    }
}, 1000);

const section01 = document.getElementById("sec01");
console.log(section01);

const secbox = document.querySelector(".sec01box");
secbox.classList.remove("sec01box");

const test01 = document.querySelector("#sec01 h2 img");
console.log(test01);
test01.classList.toggle("active");
const button01 = document.querySelector(".button01");
function changeDesign() {
    test01.classList.toggle("active");
}
button01.addEventListener("click", changeDesign);

const list = document.querySelectorAll("li");
console.log(list);
// querySelectorAllで取得した要素はこんな形で保管される
// lists = [li,li,li];
// そのため、配列のように呼び出す
// list[1]と書けば、２番目のli要素を指定する

const drawerbutton = document.querySelector("#drawerbutton");
const menu = document.querySelector("header nav ul");

function openDrawer() {
    menu.classList.toggle("open");
    drawerbutton.classList.toggle("redesign");
}
drawerbutton.addEventListener("click", openDrawer);
// グローバルスコープ（またはグローバル変数）

// アニメーションを使いたい場合は、この下のコード全てを貼り付け
// クリックしたらバナーが消える動作のプログラム
const clickButton = document.querySelector(".button01");
function clickevent() {
    banner.classList.remove("active");
}
window.addEventListener("click", clickevent);

// 対象の要素を全て取得（共通のクラス名がついている要素）
const allTarget = document.querySelectorAll(".animate__animated");

//　要素がビューポート内に入っているかどうか確認してクラスと付け外しを行う関数
function observation() {
    // 取得した全ての対して処理を繰り返すためにforEach関数を使って処理する
    allTarget.forEach(function (target) {
        // 要素の位置情報を取得
        const targetRect = target.getBoundingClientRect();

        // 画面内に入っているかどうかを判定
        if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
            // 画面内に入った場合、クラスを付与
            if (target.classList.contains("animate__fadeInLeft")) {
            } else if (target.classList.contains("sliding"));
            else {
                target.classList.add("animate__fadeInLeft");
            }
        }
    });
}

// スクロールイベントを追加
window.addEventListener("scroll", observation);
const swiper = new Swiper(".swiper", {
    // Optional parameters
    // direction: "vertical",
    loop: true,
    autoplay: {
        delay: 3000,
    },
    // スライダーの画像がフェード（ふわっと変わる）要素を入れる
    // fadeInやfadeOutとかも出来る
    effect: "fade",
    speed: 1000,
    // // If we need pagination
    // pagination: {
    //     el: ".swiper-pagination",
    // },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});
