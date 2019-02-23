## 動機
HTML5APIを存分に利用したブラウザゲームが作ってみたい

## 使用したい技術
WebGL  
WebWorker  
WebAssembly  
WebSocket  
WebRTC  

## ゲーム案
オンライン対戦可能なぷよぷよ  
WebGLは必要ない気がする
WebAssemblyとWebWorkerも最初はなくてもよいか、ゲームが重かったりしたら、使用するのを考える。  
対戦部分でWebSocketを使うと思われる、WebRTCかもしれない  

##設計とか
ぷよぷよ部分を制作する。  
ぷよぷよ通のみ  
どう対戦形式にするかを念頭に置いて設計していく。   
対戦は2人限定にする  
ページの遷移を考える  
ページ遷移イメージ  
1. タイトル、ユーザー登録orログイン
2. 対戦orとこぷよが選べる
3. 対戦であれば、なんらかの、方法でマッチングする
4. 対戦開始
5. 勝敗表示
PIを存分に利用したブラウザゲームが作ってみたい

使用したい技術
WebGL
WebWorker
WebAssembly
WebSocket
WebRTC

使用フレームワーク
phaser3
