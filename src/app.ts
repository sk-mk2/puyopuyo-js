import * as Phaser from 'phaser';
window.onload = () => {
    const config = {
        type: Phaser.AUTO,
        width: 320,
        height: 240,
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };
    const game = new Phaser.Game(config);
};

function preload(){
    this.load.image('background', 'assets/background.png');
    this.load.image('blue', 'assets/img/b.gif');
    this.load.image('red', 'assets/img/r.gif');
    this.load.image('purple', 'assets/img/p.gif');
    this.load.image('yellow', 'assets/img/y.gif');
    this.load.image('green', 'assets/img/g.gif');
    this.load.image('wood', 'assets/img/w.gif');
}

function create(){
    this.red = this.add.sprite(400, 300, 'red');
    this.add.image(0, 0, 'background');
    displayField(this, 20, 50);
    displayField(this, 200, 50);
}

function displayField(scene: Phaser.Scene, x: integer, y: integer) {
    const BLOCK_SIZE = 15;
    const WIDTH = 6;
    const HEIGHT = 12;
    for(let i = 0; i < HEIGHT; i++){
        scene.add.sprite(x, y + i * BLOCK_SIZE , 'wood');
        scene.add.sprite(x + WIDTH * BLOCK_SIZE, y + i * BLOCK_SIZE , 'wood');
        if(i === HEIGHT - 1) {
            for(let j = 1; j < WIDTH; j++){
                scene.add.sprite(x + j * BLOCK_SIZE, y + i * BLOCK_SIZE , 'wood');
            }
        }
    }
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