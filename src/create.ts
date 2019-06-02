import { Field } from './Field';
export function create(){
    this.add.image(0, 0, 'background');
    Field.displayField(this, 20, 50);
    // 2p displayField(this, 200, 50);
}
