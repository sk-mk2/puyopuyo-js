import * as Phaser from 'Phaser'
export function inputUtil() { 
    this.util = {
        cursors: this.input.keyboard.createCursorKeys(),
        spacebar: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE),
        s: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
        d: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
    }
}