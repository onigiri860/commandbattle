// キャラクターをインスタンス化する
let hero = new Hero("シェフ", 200, 50, 20, 3, 30, "../img/chef.png");  // 主人公
let enemy = new Fish("さかな", 100, 40, 10, "../img/sakana.png");      // 敵
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
