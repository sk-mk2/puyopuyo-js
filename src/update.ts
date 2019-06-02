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
    //この下二行updateにあるの微妙じゃないか？
    const cursors = this.input.keyboard.createCursorKeys();
    const spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    if(cursors.left.isDown) {
        move(canMoveTumo, -2, 0);
    }
    if(cursors.right.isDown) {
        move(canMoveTumo, 2, 0);
    }
    if(cursors.up.isDown) {
        move(canMoveTumo, 0, -2);
    }
    if(cursors.down.isDown) {
        move(canMoveTumo, 0, 2);
    }
    if (Phaser.Input.Keyboard.JustDown(spacebar)) {
        console.log(cursors.shift);
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