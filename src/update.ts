export function update(){
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