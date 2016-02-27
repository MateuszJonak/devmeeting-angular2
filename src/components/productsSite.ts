import {Component, View} from 'angular2/core';

import { ProductsListComponent } from "./productsList";
import { Product } from '../models/product.entity';

@Component({
    selector: 'products-site',
})
@View({
    templateUrl: 'views/productsSite.view.html',
    //Any directive we want to use in our component should appear in this array
    directives: [ProductsListComponent]
})
export class ProductsSiteComponent {
    public products = [
        new Product({
            id: 1,
            name: 'item1',
            price: 20,
            done: false,
            tags: ['toys']
        }),
        new Product({
            id: 2,
            name: 'item2',
            price: 40,
            done: false,
            tags: ['sport']
        }),
        new Product({
            id: 3,
            name: 'item3',
            price: 60,
            done: false,
            tags: ['sport', 'toys']
        })
    ];

    get specialProducts () {
        return this.products.filter((product) => {
            return product.id === 1;
        });
    }
}