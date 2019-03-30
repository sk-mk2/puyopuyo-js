import * as Phaser from 'phaser';
import { preload } from './preload'
import { create } from './create'
import { update } from './update'
document.addEventListener('DOMContentLoaded', () => {
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
});
