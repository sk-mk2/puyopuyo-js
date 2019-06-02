import { Field } from './Field';
export function create(){
    this.add.image(0, 0, 'background');
    const field1 = new Field(20, 50);
    field1.display(this);
    // 2p displayField(this, 200, 50);
}
