import { Field } from './Field';
export function create(){
    this.add.image(0, 0, 'background');
    const field1 = new Field(this, 20, 50);
    this.field1 = field1;
    // 2p displayField(this, 200, 50);
}
