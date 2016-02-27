interface  ProductInterface {
    name: string;
    price: number;
}

export class Product {

    public name: string = '';
    public price: number = 0;

    constructor (product: ProductInterface) {
        this.name = product.name;
        this.price = product.price;
    }
}
