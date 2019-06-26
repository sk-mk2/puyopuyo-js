import * as Phaser from 'phaser'
export class Field {
    private static BLOCK_SIZE = 15;
    private static WIDTH = 6;
    private static HEIGHT = 12;
    public static instances: Array<Field> = [];
    private x: number;
    private y: number;
    private field: Array<Array<number>> = [];

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        //フィールド内の配列を用意
        //配列の数字で制御しよう
        //ツモとかフィールドの制御を配列の数字で行なって、
        //そのあと配列に基づいて、画面更新の流れ
        this.fieldInitialize();

        Field.instances.push(this);
    }

    fieldInitialize() {
        for (let i = 0; i < Field.HEIGHT; i++) {
            this.field[i] = [];
            for (let j = 0; j < Field.WIDTH + 2; j++) {
                if (j === 0 || j === Field.WIDTH + 1 || i === Field.HEIGHT -1) {
                    this.field[i][j] = 0;
                }
            }
        } 
    }    

    display(scene: Phaser.Scene) {
        for (let i = 0; i < Field.HEIGHT; i++) {
            for (let j = 0; j < Field.WIDTH + 2; j++) {
                if(this.field[i][j] === 0) {
                    scene.add.sprite(this.x + j * Field.BLOCK_SIZE, this.y + i * Field.BLOCK_SIZE - 4, 'wood');
                }
            }
        }
    }


}