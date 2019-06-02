import * as Phaser from 'phaser'
export function preload(){
    this.util = {
        cursors: this.input.keyboard.createCursorKeys(),
        spacebar: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
    }

    this.load.image('background', 'assets/background.png');
    this.load.image('blue', 'assets/img/b.gif');
    this.load.image('red', 'assets/img/r.gif');
    this.load.image('purple', 'assets/img/p.gif');
    this.load.image('yellow', 'assets/img/y.gif');
    this.load.image('green', 'assets/img/g.gif');
    this.load.image('wood', 'assets/img/w.gif');
}