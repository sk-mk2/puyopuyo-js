import * as Phaser from 'phaser'
export class Field {
    private static BLOCK_SIZE = 15;
    private static WIDTH = 6;
    private static HEIGHT = 12;
    public static instances: Array<Field> = [];
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        Field.instances.push(this);
    }

    display(scene: Phaser.Scene) {
        for (let i = 0; i < Field.HEIGHT; i++) {
            scene.add.sprite(this.x, this.y + i * Field.BLOCK_SIZE, 'wood');
            scene.add.sprite(this.x + Field.WIDTH * Field.BLOCK_SIZE, this.y + i * Field.BLOCK_SIZE, 'wood');
            if (i === Field.HEIGHT - 1) {
                for (let j = 1; j < Field.WIDTH; j++) {
                    scene.add.sprite(this.x + j * Field.BLOCK_SIZE, this.y + i * Field.BLOCK_SIZE, 'wood');
                }
            }
        }
    }


}