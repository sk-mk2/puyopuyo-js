import * as Phaser from 'Phaser'
enum PuyoKind {
    wood = -2,
    empty,
    red,
    yellow,
    purple,
    green,
    blue,
}
enum Difficulty {
    'EASY' = 3,
    'NORMAL',
    'DIFFICULT'
}
class Puyo {
    color: PuyoKind
    obj: Phaser.scene
}

export interface Tumo {
    main: {
        x: number,
        y: number
    },
    sub: {
        x: number,
        y: number
    },
};
export class Field {
    private static BLOCK_SIZE = 15;
    private static WIDTH = 6;
    private static HEIGHT = 12;
    //フィールドのインスタンスは対戦とかで使いたくなる気がする
    //と思ったけど、対戦用クラス作って、そこにフィールド渡す感じかもしれん
    //そん時考えてください
    public static instances: Array<Field> = [];
    private x: number;
    private y: number;
    public field: Array<Array<Puyo>> = [];
    private scene: Phaser.Scene;
    private canMoveTumo: Tumo;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        this.scene = scene;
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
                this.field[i][j] = new Puyo();
                if (j === 0 || j === Field.WIDTH + 1 || i === Field.HEIGHT - 1) {
                    this.field[i][j].color = PuyoKind.wood;
                    this.scene.add.sprite(this.x + j * Field.BLOCK_SIZE, this.y + i * Field.BLOCK_SIZE - 4, 'wood');
                } else {
                    this.field[i][j].color = PuyoKind.empty;
                }
            }
        }
    }

    display() {
        let cell: Puyo;
        for (let i = 0; i < Field.HEIGHT; i++) {
            for (let j = 0; j < Field.WIDTH + 2; j++) {
                //位置補正して出力
                cell = this.field[i][j];

                switch (cell.color) {
                    case PuyoKind.wood:
                        break;
                    case PuyoKind.empty:
                        if (cell.obj) {
                            cell.obj.destroy();
                            cell.obj = null;
                        }
                        break;
                    case PuyoKind.red:
                        if (!cell.obj) {
                            cell.obj =
                                this.scene.add.sprite(this.x + j * Field.BLOCK_SIZE, this.y + i * Field.BLOCK_SIZE - 4, 'red');
                        }
                        break;
                    case PuyoKind.yellow:
                        if (!cell.obj) {
                            cell.obj =
                                this.scene.add.sprite(this.x + j * Field.BLOCK_SIZE, this.y + i * Field.BLOCK_SIZE - 4, 'yellow');
                        }
                        break;
                    case PuyoKind.purple:
                        if (!cell.obj) {
                            cell.obj =
                                this.scene.add.sprite(this.x + j * Field.BLOCK_SIZE, this.y + i * Field.BLOCK_SIZE - 4, 'purple');
                        }
                        break;
                    case PuyoKind.green:
                        if (!cell.obj) {
                            cell.obj =
                                this.scene.add.sprite(this.x + j * Field.BLOCK_SIZE, this.y + i * Field.BLOCK_SIZE - 4, 'green');
                        }
                        break;
                    case PuyoKind.blue:
                        if (!cell.obj) {
                            cell.obj =
                                this.scene.add.sprite(this.x + j * Field.BLOCK_SIZE, this.y + i * Field.BLOCK_SIZE - 4, 'blue');
                        }
                        break;

                }

            }
        }
    }
    createTumo() {
        let x = 3;
        let y = 2;
        const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
        this.field[0][3].color = getRandomInt(Difficulty.NORMAL);
        this.field[1][3].color = getRandomInt(Difficulty.NORMAL);

        this.canMoveTumo = {
            main: {
                x: 3,
                y: 1
            },
            sub: {
                x: 3,
                y: 0
            }
        };
    }
    //TODO: ここ途中１
    private move(moveX: number, moveY: number) {
        //衝突判定しなきゃ
        this.field[this.canMoveTumo.main.y + moveY][this.canMoveTumo.main.x + moveX].color = 
        this.field[this.canMoveTumo.main.y][this.canMoveTumo.main.x].color;
        this.field[this.canMoveTumo.sub.y + moveY][this.canMoveTumo.sub.x + moveX].color = 
        this.field[this.canMoveTumo.sub.y][this.canMoveTumo.sub.x].color;
        
        this.field[this.canMoveTumo.main.y][this.canMoveTumo.main.x].color = PuyoKind.empty;
        this.field[this.canMoveTumo.sub.y][this.canMoveTumo.sub.x].color = PuyoKind.empty;

        this.canMoveTumo.main.y += moveY;
        this.canMoveTumo.main.x += moveX;
        this.canMoveTumo.sub.y += moveY;
        this.canMoveTumo.sub.x += moveX;
    }

    moveLeft() {
        this.move(-1, 0);
    }

    moveRight() {
        this.move(1, 0);

    }

    moveDown() {
        this.move(0, 1);
    }

    existsWall() {
        //壁チェック
    }
}