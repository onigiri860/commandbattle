# commandbattle

コマンドを見やすく整理する

コマンドでバトルを行うゲーム

マウスカーソルで選択肢を選ぶ
 - 矢印で選択式でも可能にしたい

キャラクターの動き(アニメーション)にもっと滑らかさを
 - 参照("https://fastcoding.jp/blog/all/info/animation-4/")
 - (https://web-breeze.net/life-gauge/)

体力バーの表示
 - 体力に応じて表示する画像を変更することで対処しようと思う

 表示する場所の確保を行う
 - 主人公と敵の画像ビュー内に新しく表示するのが良いかも
 - もしくは、パラメータビューの横に追加する

 体力バーの外形は完成したので、let life~~ = をそれぞれの体力に当てる
 - おそらく lib 側に変更する必要あり？
 - 大きさの変更の必要アリ(style.css)
 

攻撃の種類の追加

エフェクトなどの追加

画像処理サイト
https://www.iloveimg.com/ja
https://jpg2png.com/ja/#google_vignette
https://www.remove.bg/ja/upload

それぞれフレームとして100pxしか幅をとっていないため150とか200にするとバグが発生
割合を利用できるかも

エフェクトの追加を行ったが、体力バーが減少しないバグが発生
 - コードの位置の問題ではなさそう
 - 更新プログラムを訂正する必要あり

 Drawstartというスタート画面の関数を作成
  - DrawWinというWin画面、Drawloseというlose画面
  - それぞれでEscをおすとDrawstartへ遷移
  - winの場合にDrawstartを呼び出しているので変更する必要あり

game -> win(lose) -> start -> gameでは最後のgame、つまり2回目のゲームの登場でエラーが発生
gameを最初に持ってこないとうまく表示されない