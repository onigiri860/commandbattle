// キャラクターをインスタンス化する
let hero = new Hero("シェフ", 200, 50, 20, 3, 30, "../img/chef.png");  // 主人公
let enemy = new Fish("さかな", 150, 40, 10, "../img/sakana.png");      // 敵
let enemy2 = new Fish("まぐろ", "../img/maguro.png");      // まぐろ

// キャラクター配列をつくる
let characters = [];
characters.push(hero);     // 主人公
characters.push(enemy);      // 敵


// ゲーム管理クラスをインスタンス化する
let gameManage = new GameManage();

// コマンドクラスをインスタンス化する
let command = new Command();

// コマンド選択の準備を整える
command.preparation();

// 体力バーの表示
const inputSlider = document.querySelector
("#inputSlider");
inputSlider.src = "../img/hp.png";
const inputSliderResult = document.querySelector
("#inputSliderResult");

//inputSlider.value = 100;

// changeイベントはゲージの操作中も値を取得する
//inputSlider.addEventListener("input", (e) => {
//    const value = e.target.value; // inputSliderの値を取得
//    inputSliderResult.innerHTML = value;
//});

// changeイベントはゲージの操作が終わってから値を取得する
inputSlider.addEventListener("change", (e) => {
    const value = e.target.value; // inputSliderの値を取得
    inputSliderResult.innerHTML = value;
});

const lifeBar = document.getElementById('life-bar')         // ライフバー
const lifeMark = document.getElementById('life-mark')       // ライフの光部分
const increaseBtn = document.getElementById('increase-btn') // + ボタン
const decreaseBtn = document.getElementById('decrease-btn') // - ボタン
let life = 100                                              // ライフ初期値
lifeBar.style.width = "100%"                                // ライフ初期幅

// *** ライフ変更処理 ***
function alterLife( value ){
    // lifeの値を算出する
    life += value 
    if ( life <= 0 ){
        // 算出の結果 0 以下になった場合
        life = 0
        // 0.3秒後に光部分を非表示にする
        setTimeout(function(){
            lifeMark.style.visibility = 'hidden'
        }, 300)
    } else {
        // 算出の結果 100 を超過した場合
        if ( life > 100 ) {
            life = 100
        }
        // 光部分を表示する
        lifeMark.style.visibility = 'visible'
    }
    // スタイル(幅)を更新する
    lifeBar.style.width = life + "%"
}