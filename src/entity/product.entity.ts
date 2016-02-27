interface  ProductInterface {
    id: number;
    name: string;
    price: number;
}

export class Product {

    public id: number = 0;
    public name: string = '';
    public price: number = 0;

    constructor (product: ProductInterface) {
        this.id = product.id;
        this.name = product.name;
        this.price = product.price;
    }
}
