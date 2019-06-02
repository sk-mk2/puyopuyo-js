import * as Phaser from 'phaser'
export class Field {
    private static BLOCK_SIZE = 15;
    private static WIDTH = 6;
    private static HEIGHT = 12;

    static displayField(scene: Phaser.Scene, x: number, y: number) {
        for (let i = 0; i < this.HEIGHT; i++) {
            scene.add.sprite(x, y + i * this.BLOCK_SIZE, 'wood');
            scene.add.sprite(x + this.WIDTH * this.BLOCK_SIZE, y + i * this.BLOCK_SIZE, 'wood');
            if (i === this.HEIGHT - 1) {
                for (let j = 1; j < this.WIDTH; j++) {
                    scene.add.sprite(x + j * this.BLOCK_SIZE, y + i * this.BLOCK_SIZE, 'wood');
                }
            }
        }
    }
}