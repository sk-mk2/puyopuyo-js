import * as Phaser from 'phaser';
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

function preload(){
    this.load.image('blue', 'assets/img/b.gif');
    this.load.image('red', 'assets/img/r.gif');
    this.load.image('purple', 'assets/img/p.gif');
    this.load.image('yellow', 'assets/img/y.gif');
    this.load.image('green', 'assets/img/g.gif');
    this.load.image('wood', 'assets/img/w.gif');
}

function create(){
    //15px?ぽい
    const puyoSize = 15;
    const test = 300;

    this.red = this.add.sprite(400, test, 'red');
    this.add.sprite(400, test - puyoSize, 'blue');
    this.add.sprite(400, test - puyoSize * 2, 'purple');
    this.add.sprite(400, test - puyoSize * 3, 'yellow');
    this.add.sprite(400, test - puyoSize * 4, 'green');
    this.add.sprite(400, test - puyoSize * 5, 'wood');
}

function update(){
    const cursors = this.input.keyboard.createCursorKeys();
    if(cursors.left.isDown) {
        this.red.x -= 2;
    }
    if(cursors.right.isDown) {
        this.red.x += 2;
    }
    if(cursors.up.isDown) {
        this.red.y -= 2;
    }
    if(cursors.down.isDown) {
        this.red.y += 2;
    }
}
window.onload = () => {
    var game = new Phaser.Game(config);
};