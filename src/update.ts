import * as Phaser from 'phaser'
//インターフェースに関数もたせられなかったけ
interface Tumo {
    main: Phaser.GameObjects.Sprite,
    sub: Phaser.GameObjects.Sprite,
};
//一旦別に関数作成
function move(tumo: Tumo, moveX, moveY) {
    tumo.main.x += moveX;
    tumo.sub.x += moveX;
    tumo.main.y += moveY;
    tumo.sub.y += moveY;

}

const existTumos : Array<Tumo> = [];
let canMoveTumo: Tumo;
export function update(){
    //TODO: ぷよの動きをフィールド内のそれぞれのマスに収める
    //TODO: フィールドとの衝突判定
    //TODO: ぷよの回転をできるようにする
    if(this.util.cursors.left.isDown) {
        move(canMoveTumo, -2, 0);
    }
    if(this.util.cursors.right.isDown) {
        move(canMoveTumo, 2, 0);
    }
    if(this.util.cursors.up.isDown) {
        move(canMoveTumo, 0, -2);
    }
    if(this.util.cursors.down.isDown) {
        move(canMoveTumo, 0, 2);
    }
    if (Phaser.Input.Keyboard.JustDown(this.util.spacebar)) {
        console.log(this.util.cursors.shift);
        canMoveTumo = tumoFactory(this, 65, 30);
        existTumos.push(canMoveTumo);

    }
}

//ツモ生成
function tumoFactory(scene: Phaser.Scene,  x: number, y: number): Tumo {
    const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
    const colorArray = ['red', 'blue', 'purple', 'green', 'yellow'];
    const difficulty = {
        'EASY': 3,
        'NORMAL': 4,
        'DIFFICULT': 5
    }
    return {
        main: scene.add.sprite(x, y, colorArray[getRandomInt(difficulty.NORMAL)]),
        sub: scene.add.sprite(x, y - 15, colorArray[getRandomInt(difficulty.NORMAL)])
    };
}