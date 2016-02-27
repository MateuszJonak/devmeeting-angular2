import { ProductInterface } from './product.interface';

export class Product {

    public id: number = 0;
    public name: string = '';
    public price: number = 0;
    public done: boolean = false;
    public tags: Array<string> = [];

    constructor (product: ProductInterface) {
        this.id = product.id;
        this.name = product.name;
        this.price = product.price;
        this.done = product.done;

        this.tags = product.tags;
    }
}
