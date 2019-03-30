export function create(){
    this.red = this.add.sprite(400, 300, 'red');
    this.add.image(0, 0, 'background');
    displayField(this, 20, 50);
    // 2p displayField(this, 200, 50);
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