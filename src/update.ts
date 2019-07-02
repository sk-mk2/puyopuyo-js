import * as Phaser from 'phaser'

export function update() {
    //TODO: ぷよの動きをフィールド内のそれぞれのマスに収める
    //TODO: フィールドとの衝突判定
    //->一旦配列でフィールドにぷよを埋めていこう
    //->てことは、moveで配列を移動に応じて書き換える感じの方が楽そう
    //->それで配列を反映して画面表示
    if (Phaser.Input.Keyboard.JustDown(this.util.cursors.left)) {
        this.field1.moveLeft();
    }
    if (Phaser.Input.Keyboard.JustDown(this.util.cursors.right)) {
        this.field1.moveRight();
    }
    if (Phaser.Input.Keyboard.JustDown(this.util.cursors.down)) {
        this.field1.moveDown();
    }

    if (Phaser.Input.Keyboard.JustDown(this.util.d)) {
        //right turn
    } else if (Phaser.Input.Keyboard.JustDown(this.util.s)) {
        //left turn 
    }
    if (Phaser.Input.Keyboard.JustDown(this.util.spacebar)) {
        this.field1.createTumo();
        console.log(this.field1.field);
        //配列の初期位置に設置
    }
    //field表示
    this.field1.display();
     
}
