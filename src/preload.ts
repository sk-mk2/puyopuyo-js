import * as Phaser from 'phaser'
import {inputUtil} from './inputUtil'
export function preload(){
    inputUtil.call(this);

    this.load.image('background', 'assets/background.png');
    this.load.image('blue', 'assets/img/b.gif');
    this.load.image('red', 'assets/img/r.gif');
    this.load.image('purple', 'assets/img/p.gif');
    this.load.image('yellow', 'assets/img/y.gif');
    this.load.image('green', 'assets/img/g.gif');
    this.load.image('wood', 'assets/img/w.gif');
}