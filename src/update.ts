import * as Phaser from 'phaser'
import { EventEmitter } from 'events';

interface Tumo {
    main: Phaser.GameObjects.Sprite,
    sub: Phaser.GameObjects.Sprite,
};
//TODO: 多分つもクラス作った方が見通し良さそう　　
//一旦別に関数作成
function move(tumo: Tumo, moveX: number, moveY: number) {
    tumo.main.x += moveX;
    tumo.sub.x += moveX;
    tumo.main.y += moveY;
    tumo.sub.y += moveY;
}

let canMoveTumo: Tumo;
class Dir {
    //0:t,1:r,2:u,3:l
    private selectDir: number;
    constructor() {
        this.selectDir = 0;
    }
    public next() {
        if (this.selectDir < 3) {
            this.selectDir++;
        } else {
            this.selectDir = 0;
        }
    }
    public back() {
        if (this.selectDir > 0) {
            this.selectDir--;
        } else {
            this.selectDir = 3;
        }
    }
    public setTumo(tumo: Tumo) {
        //TODO: ここもっとどうにかなる
        if(this.selectDir === 0) {
            tumo.sub.x = tumo.main.x;
            tumo.sub.y = tumo.main.y - 15;
        } else if (this.selectDir === 1) {
            tumo.sub.x = tumo.main.x + 15;
            tumo.sub.y = tumo.main.y;
        } else if (this.selectDir === 2) {
            tumo.sub.x = tumo.main.x;
            tumo.sub.y = tumo.main.y + 15;
        } else if (this.selectDir === 3) {
            tumo.sub.x = tumo.main.x - 15;
            tumo.sub.y = tumo.main.y;
        } 
    }
};
let dir: Dir;
export function update() {
    //TODO: ぷよの動きをフィールド内のそれぞれのマスに収める
    //TODO: フィールドとの衝突判定
    //->一旦配列でフィールドにぷよを埋めていこう
    //->てことは、moveで配列を移動に応じて書き換える感じの方が楽そう
    //->それで配列を反映して画面表示
    if (Phaser.Input.Keyboard.JustDown(this.util.cursors.left)) {
        //
        move(canMoveTumo, -15, 0);
        console.log('click');
        this.util.cursors.le
    }
    if (Phaser.Input.Keyboard.JustDown(this.util.cursors.right)) {
        move(canMoveTumo, 15, 0);
    }
    if (Phaser.Input.Keyboard.JustDown(this.util.cursors.up)) {
        move(canMoveTumo, 0, -15);
    }
    if (Phaser.Input.Keyboard.JustDown(this.util.cursors.down)) {
        move(canMoveTumo, 0, 15);
    }

    if (Phaser.Input.Keyboard.JustDown(this.util.d)) {
        dir.next();
    } else if (Phaser.Input.Keyboard.JustDown(this.util.s)) {
        dir.back();
    }
    //dirに即した表示にする
    if (dir) {
        dir.setTumo(canMoveTumo);
    }

    if (Phaser.Input.Keyboard.JustDown(this.util.spacebar)) {
        console.log(this.util.cursors.shift);
        canMoveTumo = tumoFactory(this, 65, 30);
        dir = new Dir();
    }
}

//ツモ生成
function tumoFactory(scene: Phaser.Scene, x: number, y: number): Tumo {
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